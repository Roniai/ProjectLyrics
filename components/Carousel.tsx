import { Color, Font, Size, vw } from "@/styles";
import React, { useEffect, useRef, useState } from "react";
import {
  FlatList,
  Image,
  View,
  StyleSheet,
  Text,
  ImageProps,
} from "react-native";

type TGallery = {
  label: string;
  uri: string;
};

type Props = {
  data: TGallery[];
  delay?: number;
};

export const Carousel: React.FC<Props> = ({ data, delay = 5000 }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const flatlistRef = useRef<FlatList>(null);
  const width = Size.width;

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = activeIndex === data.length - 1 ? 0 : activeIndex + 1;
      flatlistRef.current?.scrollToIndex({
        index: nextIndex,
        animated: true,
      });
    }, delay);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const getItemLayout = (_data: any, index: number) => ({
    length: width,
    offset: width * index,
    index,
  });

  const renderItem = ({ item }: { item: TGallery }) => (
    <>
      <View style={styles.imageContainer}>
        <Image
          source={item.uri as ImageProps}
          style={{
            height: "100%",
            width: Size.width,
            alignSelf: "center",
          }}
          resizeMode="cover"
        />
      </View>
      <View style={styles.labelContainer}>
        <Text style={[Font.subtitle, { textAlignVertical: "center", flex: 1 }]}>
          {item.label}
        </Text>
      </View>
    </>
  );

  const handleScroll = (event: any) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / width);

    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  const renderDotIndicators = () => {
    return data.map((dot, index) => (
      <View
        key={index}
        style={{
          backgroundColor: activeIndex === index ? Color.white : "#F2F1F333",
          height: 1 * vw,
          width: 6 * vw,
          borderRadius: 1.25 * vw,
          marginHorizontal: Size.XS2,
        }}
      />
    ));
  };

  return (
    <View style={{ marginBottom: Size.L }}>
      <FlatList
        data={data}
        ref={flatlistRef}
        getItemLayout={getItemLayout}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${index}-${item.uri}`}
        onScroll={handleScroll}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        snapToInterval={width}
        snapToOffsets={data.map((_, index) => index * width)} // 🛠️ Snap à chaque image
        scrollEventThrottle={16}
      />
      <View style={styles.renderCarousel}>{renderDotIndicators()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    height: 55 * vw,
    backgroundColor: Color.greyscaleDefault,
  },
  labelContainer: {
    backgroundColor: Color.white,
    paddingHorizontal: Size.XS3,
    position: "absolute",
    justifyContent: "center",
    bottom: Size.M,
    left: Size.M,
  },
  renderCarousel: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: -vw * 2,
  },
});

export default Carousel;
