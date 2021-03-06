import { withNavigation } from "@react-navigation/compat";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
} from "react-native";
import { connect } from "react-redux";
import CardServiceHighlight from "../../components/CardServiceHightLight";
import CardLine from "../../components/CardLine";
import CardNavigate from "../../components/CardNavigate";

import medicalNewProvider from "../../data-access/medical-new";
import medicalServiceProvider from "../../data-access/medical-service";
import newsTopicProvider from "../../data-access/news-topic";
import { utilities } from "./constant";
import { promotion } from "./data";
import styles from "./styles";
import hospitalProvider from "../../data-access/hospital";
import CardTopFacility from "../../components/CardTopFacility";
import { other } from "../notification/data";

const { width, height } = Dimensions.get("screen");

const Home = ({ updateData, navigation, ...props }) => {
  const [state, _setState] = useState({});
  const {
    medicalNews = [],
    charityPrograms = [],
    medicalServiceHighlights = [],
    topFacilities = [],
  } = state;

  const setState = (data) => {
    _setState((pre) => ({ ...pre, ...data }));
  };

  const getMedicalNews = () => {
    medicalNewProvider.search({ page: 0, size: 5 }).then((res) => {
      if (res.content) {
        setState({ medicalNews: res.content });
      }
    });
  };
  const getCharityProgram = () => {
    newsTopicProvider.search({ page: 0, size: 5 }).then((res) => {
      if (res.content) {
        setState({ charityPrograms: res.content });
      }
    });
  };

  const getMedicalServiceHighlight = () => {
    medicalServiceProvider.searchHighlight({}).then((res) => {
      if (res) {
        setState({
          medicalServiceHighlights: res.filter((_, index) => index < 4),
        });
      }
    });
  };

  const getTopFacility = () => {
    hospitalProvider
      .searchTopFacility({
        page: 1,
        size: 9,
        serviceTypeId: -1,
        lat: 190,
        lon: 190,
        type: 1,
      })
      .then((res) => {
        if (res && res.code === 0 && res.data) {
          setState({ topFacilities: res.data.data });
        }
      });
  };
  useEffect(() => {
    getMedicalNews();
    getCharityProgram();
    getMedicalServiceHighlight();
    getTopFacility();
  }, []);

  const components = [
    <View style={styles.layoutTop}>
      <View style={styles.header_left}>
        <Text style={{ color: "#000", fontSize: 15 }}>
          Xin ch??o,
          <Text style={{ color: "#000", fontSize: 18, fontWeight: "bold" }}>
            Ng?? Hi???u
          </Text>
        </Text>
        <Text style={{ color: "#9e9e9e" }}>
          Ch??m s??c s???c kh???e ch??? ?????ng v???i ISOFHCARE
        </Text>
      </View>

      <Image
        source={require("../../assets/image/image-header.png")}
        style={styles.header_right}
      />
    </View>,
    <View
      style={{
        backgroundColor: "white",
      }}
    >
      <Text style={styles.title_group}>?????t kh??m ngay</Text>
      <View style={{ flexDirection: "row", padding: 20 }}>
        <View style={styles.appointment_card_left}>
          <Text style={{ color: "#d6f434", fontSize: 16, fontWeight: "bold" }}>
            B??c s?? ??i!
          </Text>
          <Text style={{ color: "#e2ffff" }}>
            K???t n???i v???i c??c b??c s?? chuy??n khoa ?????u ng??nh
          </Text>
          <Image source={require("../../assets/image/docter-image.png")} />
        </View>
        <View style={styles.appointment_card_right}>
          <View
            style={[
              styles.appointment_card_right_top,
              styles.appointment_card_right_child,
            ]}
          >
            <Image
              source={require("../../assets/image/dich-vu-y-te.jpg")}
              style={{ width: 40, height: 40 }}
            />
            <Text style={styles.appointment_card_text}>D???ch v??? y t???</Text>
          </View>
          <View
            style={[
              styles.appointment_card_right_bottom,
              styles.appointment_card_right_child,
            ]}
          >
            <Image
              source={require("../../assets/image/co-so-y-te.jpg")}
              style={{ width: 40, height: 40 }}
            />
            <Text style={styles.appointment_card_text}>C?? s??? y t???</Text>
          </View>
        </View>
      </View>
    </View>,
    <Text
      style={[
        styles.title_group,
        {
          backgroundColor: "white",
        },
      ]}
    >
      Ti???n ??ch ISOFHCARE
    </Text>,
    <View style={styles.group_card_feature}>
      {utilities.map((item, index) => (
        <CardNavigate
          key={index}
          title={item.title}
          style={{
            marginBottom: 10,
            marginLeft: (width - 120 * 3 - 20) / 6,
            marginRight: (width - 120 * 3 - 20) / 6,
          }}
          icon={item.icon}
        />
      ))}
    </View>,
    <Image
      source={require("../../assets/image/bac-si-oi-home.jpg")}
      style={{ width, marginTop: 15 }}
    />,
    <Text style={styles.title_group}>C?? s??? y t??? h??ng ?????u</Text>,
    <FlatList
      data={topFacilities}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item: { hospital }, index }) => (
        <CardTopFacility
          image={hospital.imageHome}
          key={index}
          title={hospital.name?.toUpperCase()}
          address={hospital.address}
        />
      )}
      keyExtractor={(item, index) => index.toString()}
    />,
    // <ScrollView
    //   style={styles.group_card_promotion}
    //   horizontal
    //   showsHorizontalScrollIndicator={false}
    // >
    //   {topFacilities.map(({ hospital }, index) => (
    //     <CardTopFacility
    //       image={hospital.imageHome}
    //       key={index}
    //       title={hospital.name?.toUpperCase()}
    //       address={hospital.address}
    //     />
    //   ))}
    // </ScrollView>
    <Text style={styles.title_group}>D???ch v??? n???i b???t</Text>,
    <View style={{ flexWrap: "wrap", flexDirection: "row", paddingLeft: 5 }}>
      {medicalServiceHighlights.map(
        ({ name, monetaryAmount, hospital, image }, index) => (
          <CardServiceHighlight
            image={image}
            key={index}
            title={name}
            price={monetaryAmount.value}
            room={hospital.name}
          />
        )
      )}
    </View>,
    <Text style={styles.title_group}>C???m nang y t???</Text>,
    <View style={{ backgroundColor: "#eef4f2" }}>
      {medicalNews.map(({ images, metaTitle }, index) => (
        <CardLine
          key={index}
          image={images[0]?.downloadUri}
          content={metaTitle?.rawText}
        />
      ))}
    </View>,
    <Text style={styles.title_group}>Ch????ng tr??nh nh??n ??i</Text>,
    <View>
      {charityPrograms.map(({ images, metaTitle }, index) => (
        <CardLine
          key={index}
          image={images[0]?.downloadUri}
          content={metaTitle?.rawText}
        />
      ))}
    </View>,
  ];

  return (
    <View style={styles.main}>
      <FlatList
        data={components}
        renderItem={({ item }) => item}
        keyExtractor={(item, index) => index.toString()}
      />
      {/* <ScrollView showsVerticalScrollIndicator={false}></ScrollView> */}
    </View>
  );
};

export default connect(
  ({ navigation: { mode } }) => ({ mode }),
  ({ navigation: { updateData } }) => ({ updateData })
)(withNavigation(Home));
