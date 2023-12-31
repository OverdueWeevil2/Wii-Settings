﻿_msgParentalString = new Array("子供のころ得意だった教科は？",
			"子供のころ嫌いだった食べ物は？",
			"今一番欲しいものは？",
			"一番心に残っているプレゼントは？",
			"尊敬する人は？",
			"一番行きたい旅行先は？");

function _msgConnectNum(data)
{
	document.all.BnrName.innerHTML = "接続先"+data;
}

function _msgUseConnect()
{
	document.all.mySet.innerHTML = '接続先'+data+'を使用します。';
}

function _msgClearSetting(data)
{
	document.all.titleName.innerHTML = "接続先"+data+"の設定を消去します。";
}

function _msgWirelessSetting(data)
{
	document.all.titleName.innerHTML = "「接続先"+data+"」の設定";
}

function _msgConnectType1Setting(type1)
{
	text = new Array("未設定","有線","Wi-Fi");
	document.all.conType1.innerHTML = text[type1];
}

function _msgConnectType2Setting(type2)
{
	text = new Array("未設定","有線","Wi-Fi");
	document.all.conType2.innerHTML = text[type2];
}

function _msgConnectType3Setting(type3)
{
	text = new Array("未設定","有線","Wi-Fi");
	document.all.conType3.innerHTML = text[type3];
}

function _msgSecurityType(data)
{
	switch(data)
	{
	case 1: document.all.SecName.innerHTML = "WEP"; break;
	case 2: document.all.SecName.innerHTML = "WPA-PSK(TKIP)"; break;
	case 3: document.all.SecName.innerHTML = "WPA-PSK(AES)"; break;
	case 4: document.all.SecName.innerHTML = "WPA2-PSK(AES)"; break;
	}
}

function _msgMacAddress(data)
{
	string2 = "LANアダプタ MACアドレス";
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
	case 20:  document.all("Rating").style.backgroundImage = "url(../../../COMMON/ESRB/No_Rating_eng.gif)"; break;
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

