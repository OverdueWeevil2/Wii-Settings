_msgParentalString = new Array("Wat is de meisjesnaam van je moeder?",
			"Wat is je geboorteplaats?",
			"Waar ben je opgegroeid?",
			"Wat is de achternaam van je favoriete acteur?",
			"Wat is de achternaam van je favoriete schrijver?",
			"Wat is de achternaam van je favoriete zanger/zangeres?");

function _msgConnectNum(data)
{
	document.all.BnrName.innerHTML = "Verbinding "+data;
}

function _msgUseConnect()
{
	document.all.mySet.innerHTML = 'Verbinding '+data+' wordt gebruikt.';
}

function _msgClearSetting(data)
{
	document.all.titleName.innerHTML = "Verbinding "+data+"の設定を消去します。";
}

function _msgWirelessSetting(data)
{
	document.all.titleName.innerHTML = "「Verbinding "+data+"」の設定";
}

function _msgConnectType1Setting(type1)
{
	text = new Array("Leeg","LAN-kabel","Wi-Fi");
	document.all.conType1.innerHTML = text[type1];
}

function _msgConnectType2Setting(type2)
{
	text = new Array("Leeg","LAN-kabel","Wi-Fi");
	document.all.conType2.innerHTML = text[type2];
}

function _msgConnectType3Setting(type3)
{
	text = new Array("Leeg","LAN-kabel","Wi-Fi");
	document.all.conType3.innerHTML = text[type3];
}

function _msgSecurityType(data)
{
	switch(data)
	{
	case 1: document.all.SecName.innerHTML = "WEP"; break;
	case 2: document.all.SecName.innerHTML = "WPA (TKIP)"; break;
	case 3: document.all.SecName.innerHTML = "WPA (AES)"; break;
	case 4: document.all.SecName.innerHTML = "WPA2 (AES)"; break;
	}
}

function _msgMacAddress(data)
{
	string2 = "MAC-adres LAN-adapter";
	if( data == 0 )
	{
		string2 = string2.fontcolor("#333333");
	}
	document.all.myLanMac2.innerHTML = string2;
}

function _msgParentalESRBDraw(rate)
{
	switch( rate )
	{
	case 17: document.all("Rating").style.backgroundImage = "url(../../../COMMON/ESRB/M.gif)"; break;
	case 13: document.all("Rating").style.backgroundImage = "url(../../../COMMON/ESRB/T.gif)"; break;
	case 10: document.all("Rating").style.backgroundImage = "url(../../../COMMON/ESRB/E10.gif)"; break;
	case 6:  document.all("Rating").style.backgroundImage = "url(../../../COMMON/ESRB/E.gif)"; break;
	case 3:  document.all("Rating").style.backgroundImage = "url(../../../COMMON/ESRB/eC.gif)"; break;
	case 20: lang = wii.language;
		 if( lang == 1 )
		 {
			 document.all("Rating").style.backgroundImage = "url(../../../COMMON/ESRB/No_Rating_eng.gif)";
		 }
		 else
		 {
			 document.all("Rating").style.backgroundImage = "url(../../../COMMON/ESRB/No_Rating_spa.gif)";
		 }
		break;
	}
}

function _msgParentalESRB_FRADraw(rate)
{
	switch( rate )
	{
	case 17: document.all("Rating").style.backgroundImage = "url(../../../COMMON/ESRB_FRA/M.gif)"; break;
	case 13: document.all("Rating").style.backgroundImage = "url(../../../COMMON/ESRB_FRA/T.gif)"; break;
	case 10: document.all("Rating").style.backgroundImage = "url(../../../COMMON/ESRB_FRA/E10.gif)"; break;
	case 6:  document.all("Rating").style.backgroundImage = "url(../../../COMMON/ESRB_FRA/E.gif)"; break;
	case 3:  document.all("Rating").style.backgroundImage = "url(../../../COMMON/ESRB_FRA/eC.gif)"; break;
	case 20:  document.all("Rating").style.backgroundImage = "url(../../../COMMON/ESRB_FRA/No_Rating_fra.gif)"; break;
	}
}

