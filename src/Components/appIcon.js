/* 
Note: It is Compulsory to Show icon family when rendering this component
To show icon type simple family show[iconFamily] e.g showAntDesign as a prop 

The main use of this component is to enable dynamic rendering of icons that are available in the react-native vector icons library 
It was created to solve the problem of rendering dynamic icons on the appTextInput field 
*/

import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Zocial from 'react-native-vector-icons/Zocial';

import colors from '../Config/colors';

const AppIcon = props => {
  //giving default values so that anytime this componet is called there will be something displayed 
  let name = 'user';
  let size = 60;
  let color = colors.primaryLight;

  //modifying the default values above
  if (props.color != null) color = props.color;
  if (props.name != null) name = props.name;
  if (props.size != null) size = props.size;

  const style = props.style;

  const showAntDesign = props.showAntDesign;
  const showEntypo = props.showEntypo;
  const showEvilIcons = props.showEvilIcons;
  const showFeather = props.showFeather;
  const showFontAwesome = props.showFontAwesome;
  const showFontAwesome5 = props.showFontAwesome5;
  const showFontAwesome5Pro = props.showFontAwesome5Pro;
  const showFontisto = props.showFontisto;
  const showFoundation = props.showFoundation;
  const showIonicons = props.showIonicons;
  const showMaterialCommunityIcons = props.showMaterialCommunityIcons;
  const showMaterialIcons = props.showMaterialIcons;
  const showOcticons = props.showOcticons;
  const showSimpleLineIcons = props.showSimpleLineIcons;
  const showZocial = props.showMaterialIcons;

  return (
    <>
      {showAntDesign && (
        <AntDesign size={size} name={name} color={color} style={style} />
      )}
      {showEntypo && (
        <Entypo size={size} name={name} color={color} style={style} />
      )}
      {showEvilIcons && (
        <EvilIcons size={size} name={name} color={color} style={style} />
      )}
      {showFeather && (
        <Feather size={size} name={name} color={color} style={style} />
      )}
      {showFontAwesome && (
        <FontAwesome size={size} name={name} color={color} style={style} />
      )}
      {showFontAwesome5 && (
        <FontAwesome5 size={size} name={name} color={color} style={style} />
      )}
      {showFontAwesome5Pro && (
        <FontAwesome5Pro size={size} name={name} color={color} style={style} />
      )}
      {showFontisto && (
        <Fontisto size={size} name={name} color={color} style={style} />
      )}
      {showFoundation && (
        <Foundation size={size} name={name} color={color} style={style} />
      )}
      {showIonicons && (
        <Ionicons size={size} name={name} color={color} style={style} />
      )}
      {showMaterialCommunityIcons && (
        <MaterialCommunityIcons
          size={size}
          name={name}
          color={color}
          style={style}
        />
      )}
      {showMaterialIcons && (
        <MaterialIcons size={size} name={name} color={color} style={style} />
      )}
      {showOcticons && (
        <Octicons size={size} name={name} color={color} style={style} />
      )}
      {showSimpleLineIcons && (
        <SimpleLineIcons size={size} name={name} color={color} style={style} />
      )}
      {showZocial && (
        <Zocial size={size} name={name} color={color} style={style} />
      )}
    </>
  );
};

export default AppIcon;
