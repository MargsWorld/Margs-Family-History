// Created by iWeb 3.0.4 local-build-20130322

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-2,2,4,286),url:'Brimbles_and_Brains_files/stroke.png'},{rect:new IWRect(-2,-2,4,4),url:'Brimbles_and_Brains_files/stroke_1.png'},{rect:new IWRect(2,-2,382,4),url:'Brimbles_and_Brains_files/stroke_2.png'},{rect:new IWRect(384,-2,5,4),url:'Brimbles_and_Brains_files/stroke_3.png'},{rect:new IWRect(384,2,5,286),url:'Brimbles_and_Brains_files/stroke_4.png'},{rect:new IWRect(384,288,5,4),url:'Brimbles_and_Brains_files/stroke_5.png'},{rect:new IWRect(2,288,382,4),url:'Brimbles_and_Brains_files/stroke_6.png'},{rect:new IWRect(-2,288,4,4),url:'Brimbles_and_Brains_files/stroke_7.png'}],new IWSize(387,290)),shadow_0:new IWShadow({blurRadius:10,offset:new IWPoint(4.2426,4.2426),color:'#000000',opacity:0.750000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Brimbles_and_Brains_files/Brimbles_and_BrainsMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
