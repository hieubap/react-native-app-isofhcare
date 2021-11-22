import { withNavigation } from "@react-navigation/compat";
import React, { useEffect, useState } from "react";
import { Dimensions, Image, ScrollView, Text, View } from "react-native";
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
          medicalServiceHighlights: res.filter((_, index) => index < 6),
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

  console.log(
    medicalNews,
    charityPrograms,
    medicalServiceHighlights,
    topFacilities,
    "medicalNews"
  );

  return (
    <View style={styles.main}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.layoutTop}>
          <View style={styles.header_left}>
            <Text style={{ color: "#000", fontSize: 15 }}>
              Xin chào,
              <Text style={{ color: "#000", fontSize: 18, fontWeight: "bold" }}>
                Ngô Hiếu
              </Text>
            </Text>
            <Text style={{ color: "#9e9e9e" }}>
              Chăm sóc sức khỏe chủ động với ISOFHCARE
            </Text>
          </View>

          <Image
            source={require("../../assets/image/image-header.png")}
            style={styles.header_right}
          />
        </View>

        <View
          style={{
            backgroundColor: "white",
          }}
        >
          <Text style={styles.title_group}>Đặt khám ngay</Text>
          <View style={{ flexDirection: "row", padding: 20 }}>
            <View style={styles.appointment_card_left}>
              <Text
                style={{ color: "#d6f434", fontSize: 16, fontWeight: "bold" }}
              >
                Bác sĩ ơi!
              </Text>
              <Text style={{ color: "#e2ffff" }}>
                Kết nối với các bác sĩ chuyên khoa đầu ngành
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
                <Text style={styles.appointment_card_text}>Dịch vụ y tế</Text>
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
                <Text style={styles.appointment_card_text}>Cơ sở y tế</Text>
              </View>
            </View>
          </View>
        </View>

        <Text
          style={[
            styles.title_group,
            {
              backgroundColor: "white",
            },
          ]}
        >
          Tiện ích ISOFHCARE
        </Text>
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
        </View>

        <Image
          source={require("../../assets/image/bac-si-oi-home.jpg")}
          style={{ width, marginTop: 15 }}
        />

        <Text style={styles.title_group}>Cơ sở y tế hàng đầu</Text>

        <ScrollView
          style={styles.group_card_promotion}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {topFacilities.map(({ hospital }, index) => (
            <CardTopFacility
              image={hospital.imageHome}
              key={index}
              title={hospital.name?.toUpperCase()}
              address={hospital.address}
            />
          ))}
        </ScrollView>

        <Text style={styles.title_group}>Dịch vụ nổi bật</Text>
        <View
          style={{ flexWrap: "wrap", flexDirection: "row", paddingLeft: 5 }}
        >
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
        </View>

        <Text style={styles.title_group}>Cẩm nang y tế</Text>
        <View style={{ backgroundColor: "#eef4f2" }}>
          {medicalNews.map(({ images, metaTitle }, index) => (
            <CardLine
              key={index}
              image={images[0]?.downloadUri}
              content={metaTitle?.rawText}
            />
          ))}
        </View>

        <Text style={styles.title_group}>Chương trình ân ái</Text>
        {charityPrograms.map(({ images, metaTitle }, index) => (
          <CardLine
            key={index}
            image={images[0]?.downloadUri}
            content={metaTitle?.rawText}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default connect(
  ({ navigation: { mode } }) => ({ mode }),
  ({ navigation: { updateData } }) => ({ updateData })
)(withNavigation(Home));
