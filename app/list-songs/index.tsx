import lyrics from "@/assets/data/songs";
import { Color, Font, Size, vw } from "@/styles";
import { TSong } from "@/type/song";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import { Slot, router } from "expo-router";
import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

type ItemLyricsProps = {
  id: number;
  title: string;
  onPress?: () => void;
};

type SearchInputProps = {
  placeholder?: string;
  onChange: (value: string) => void;
};

const ItemLyrics: React.FC<ItemLyricsProps> = ({ id, title, onPress }) => {
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
      <MaterialCommunityIcons
        name={"playlist-music-outline"}
        color={Color.primaryLighter}
        size={30}
      />
      {/** @todo: use number */}
      {/* <Text style={[Font.h5Sb, { color: Color.primaryLighter }]}>{id}</Text> */}
      <Text style={[Font.body, { flex: 1, marginLeft: Size.M }]}>{title}</Text>
      <Entypo name="chevron-right" size={18} />
    </TouchableOpacity>
  );
};

const SearchInput: React.FC<SearchInputProps> = ({ placeholder, onChange }) => {
  return (
    <View style={styles.inputContainer}>
      <View style={{ flex: 1 }}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={Color.greyscaleTextSubtitle}
          style={Font.body}
          onChangeText={(value) => onChange(value)}
        />
      </View>
      <MaterialCommunityIcons name="text-search" size={32} />
    </View>
  );
};

const ListSongsLyrics = () => {
  const [filteredLyrics, setFilteredLyrics] = useState<TSong[]>(lyrics);

  const handleSearch = (value: any) => {
    /** @todo: search by id */
    // if (!isNaN(value)) {
    //   setFilteredLyrics(
    //     lyrics.filter((lyric) => new RegExp(value).test(lyric.id.toString()))
    //   );
    // } else {
    setFilteredLyrics(
      lyrics.filter((lyric) => new RegExp(value, "i").test(lyric.title))
    );
    // }
  };

  return (
    <View style={styles.mainContainer}>
      <SearchInput
        placeholder="Hitady lohatenin-kira..."
        onChange={handleSearch}
      />
      <FlatList
        data={filteredLyrics}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        renderItem={({ item, index }) => (
          <ItemLyrics
            key={`${item.id}-${index}`}
            id={item.id}
            title={item.title}
            onPress={() => {
              router.push({
                pathname: "/list-songs/[id]",
                params: { id: item.id },
              });
            }}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Color.white,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: Size.L,
    paddingHorizontal: Size.XL,
    borderBottomColor: Color.greyscaleDefault,
    borderBottomWidth: 1,
  },
  inputContainer: {
    paddingHorizontal: Size.XL,
    marginVertical: Size.XS2,
    borderRadius: Size.S,
    flexDirection: "row",
    gap: Size.XS2,
    alignItems: "center",
    height: 12 * vw,
    borderBottomColor: Color.greyscaleDefault,
    borderBottomWidth: 1,
  },
});

export default ListSongsLyrics;
