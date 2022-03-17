import * as React from 'react';
import { Text, View, StyleSheet, Image, Dimensions, TextInput, Button } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <View style={styles.left}>
          <Image source={require('./assets/ikon-panah.svg')}/>
        </View>
        <View style={styles.navRight}>
          <Image source={require('./assets/ikon-cari.svg')}/>
          <Image 
            style={styles.bel}
            source={require('./assets/ikon-bel.svg')}
          />
        </View>
      </View>
      <View style={styles.header}>
          <Text style={styles.judul}> My Dashboard </Text>
            <SwiperFlatList autoplay autoplayDelay={2} autoplayLoop index={2} showPagination>
            <View style={[styles.child]}>
              <Image  
                style={styles.foto}
                resizeMode={'center'}
                source={require('./assets/bg.svg')} 
              />
            </View>
            <View style={[styles.child]}>
              <Image  
                style={styles.foto}
                resizeMode={'center'}
                source={require('./assets/bg.svg')} 
              />
            </View>
            <View style={[styles.child]}>
              <Image  
                style={styles.foto}
                resizeMode={'center'}
                source={require('./assets/bg.svg')} 
              />
            </View>
            <View style={[styles.child]}>
              <Image  
                style={styles.foto}
                resizeMode={'center'}
                source={require('./assets/bg.svg')} 
              />
            </View>
            <View style={[styles.child]}>
              <Image  
                style={styles.foto}
                resizeMode={'center'}
                source={require('./assets/bg.svg')} 
              />
            </View>
            <View style={[styles.child]}>
              <Image  
                style={styles.foto}
                resizeMode={'center'}
                source={require('./assets/bg.svg')} 
              />
            </View>
          </SwiperFlatList>
      </View>
      <View style={styles.menu}>
        <View style={styles.isi}>
          <View style={styles.atas}>
            <Image 
              style={styles.ikon}
              source={require('./assets/ikon-services.svg')} />
            <View style={styles.count}>
              <Text style={styles.number}> 1 </Text>
            </View>
          </View>
          <Text style={styles.label}> Services </Text>
        </View>
        <View style={styles.isi}>
          <View style={styles.atas}>
            <Image 
              style={styles.ikon}
              source={require('./assets/ikon-domain.svg')} />
            <View style={styles.count}>
              <Text style={styles.number}> 1 </Text>
            </View>
          </View>
          <Text style={styles.label}> Domain </Text>
        </View>
        <View style={styles.isi}>
          <View style={styles.atas}>
            <Image 
              style={styles.ikon}
              source={require('./assets/ikon-unpaid-invoice.svg')} />
            <View style={styles.count}>
              <Text style={styles.number}> 1 </Text>
            </View>
          </View>
          <Text style={styles.label}> Unpaid Invoice </Text>
        </View>
        <View style={styles.isi}>
          <View style={styles.atas}>
            <Image 
              style={styles.ikon}
              source={require('./assets/ikon-view-tickets.svg')} />
            <View style={styles.count}>
              <Text style={styles.number}> 0 </Text>
            </View>
          </View>
          <Text style={styles.label}> View Tickets </Text>
        </View>
      </View>
      <LinearGradient
        colors={['#4DFDF2', '#4D74FD']}
        style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Find your new domain name"/>
        <View style={styles.bawah}>
          <LinearGradient
            colors={['#FFFFFF']}
            style={styles.transfer}>
            <Text style={styles.txttra}>Transfer</Text>
          </LinearGradient>
          <LinearGradient
            colors={['#4DA8FD', '#854DFD']}
            style={styles.register}>
            <Text style={styles.txtreg}>Register</Text>
          </LinearGradient>
        </View>
        <Text style={styles.txt}>Transfer now to extend your domain by 1 year!*</Text>
      </LinearGradient>
      <View style={styles.foot}>
        <View style={styles.fitur}>
          <View style={styles.kom}>
            <Image 
              style={styles.ifitur}
              source={require('./assets/ikon-home-blue.svg')} />
          </View>
          <Text style={styles.txtkomblue}>Home</Text>
        </View>
        <View style={styles.fitur}>
          <View style={styles.kom}>
            <Image 
              style={styles.ifitur}
              source={require('./assets/ikon-payment-grey.png')} />
          </View>
          <Text style={styles.txtkomgrey}>Payment</Text>
        </View>
        <View style={styles.fitur}>
          <View style={styles.kom}>
            <Image 
              style={styles.ifitur}
              source={require('./assets/ikon-more-grey.svg')} />
          </View>
          <Text style={styles.txtkomgrey}>More</Text>
        </View>
        <View style={styles.fitur}>
          <View style={styles.kom}>
            <Image 
              style={styles.ifitur}
              source={require('./assets/ikon-account.svg')} />
          </View>
          <Text style={styles.txtkomgrey}>Account</Text>
        </View>
      </View>
      
    </View>  
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nav: {
    paddingLeft : 20,
    paddingRight : 20,
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  navRight: {
    flexDirection: "row",
  },
  bel: {
    marginLeft: 10,
  },
  header: {
    marginTop: 20,
  },
  judul: {
    fontFamily: "Roboto",
    fontWeight: 500,
    fontSize: 24,
    lineHeight: 24,
    color: "#000000",
    paddingLeft: 5,
  },
  child: {
    width,
    marginTop: 20,
  },
  foto: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginLeft: 9,
    width: 300,
    height: 150
  },
  menu: {
    marginLeft: 10,
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "flex-start",
  },
  isi: {
    width: 140,
    height: 100,
    background: "#F5F6FD",
    borderRadius: 20,
    marginRight: 10,
    marginTop: 10,
  },
  ikon: {
    marginTop: 10,
    marginLeft: 20,
  },
  label: {
    marginTop: 5,
    marginLeft: 10,
    fontFamily: 'Roboto',
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 15,
    color: '#000000',
  },
  atas: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 60,
  },
  count: {
    width: 16,
    height: 16,
    background: '#0075FF',
    borderRadius: 10,
    marginRight: 20,
    marginTop: 20,
  },
  number: {
    fontFamily: 'Roboto',
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 14,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  form: {
    width:280,
    height: 200,
    backgroundColor: 'linearGradient(314.65deg, #4D74FD -0.61%, #4DFDF2 100%)',
    marginTop: 20,
    borderRadius: 10,
    marginLeft: 15,
  },
  input:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width: 250,
    height: 50,
    background: '#FFFFFF',
    borderRadius: 10,
    marginTop: 30,
    marginLeft: 15,
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 30,
    color: '#B8BEC7'
  },
  bawah: {
    flexDirection: 'row',
    marginTop: 15
  },
  transfer:{
    width:120,
    height: 50,
    background: '#FFFFFF',
    borderRadius: 10,
    marginLeft: 15,
    paddingTop:10
  },
  txttra: {
    color: '#B8BEC7',
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 30,
  },
  register:{
    width:120,
    height: 50,
    borderRadius: 10,
    marginLeft: 10,
    paddingTop:10
  },
  txtreg: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 30,
  },
  txt: {
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 30,
    color: '#B8BEC7',
    textAlign: 'center',
    marginTop: 10
  },
  foot:{
    marginLeft: 30,
    marginRight: 30,
    justifyContent: 'space-between',
    flexDirection: 'Row',
  },
  fitur: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ifitur: {
    
  },
  kom:{
    height: 20,
    alignItems: 'center'
  },
  txtkomblue: {
    fontWeight: 400,
    fontSize: 11,
    lineHeight: 13,
    textAlign: 'center',
    letterSpacing: -0.24,
    color: '#0075FF',
    marginTop: 3
  },
  txtkomgrey: {
    fontWeight: 400,
    fontSize: 11,
    lineHeight: 13,
    textAlign: 'center',
    letterSpacing: -0.24,
    color: '#B8BEC7',
    marginTop: 3
  },
});
