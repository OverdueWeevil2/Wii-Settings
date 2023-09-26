_msgParentalString = new Array("가장 좋아하는 가수의 이름은?",
			"내가 태어난 곳은?",
			"지금 가장 갖고 싶은 것은?",
			"가장 기억에 남는 선물은?",
			"존경하는 인물은?",
			"가장 기억에 남는 여행지는?");

function _msgConnectNum(data)
{
	document.all.BnrName.innerHTML = "접속 경로 "+data;
}

function _msgUseConnect()
{
    var src = '접속 경로 '+data+'을 사용합니다.';
    var dst;
    
    if ( data == 2 )
    {
        dst = src.substring(0,6)+data;
        dst = dst+'를'+src.substring(8,14);
    }
    else
    {
        dst = src;
    }
    
	document.all.mySet.innerHTML = dst;
}

function _msgClearSetting(data)
{
    var src = "접속 경로 "+data+"을 소거합니다.";
    var dst;
    
    if ( data == 2 )
    {
        dst = src.substring(0,6)+data;
        dst = dst+'를'+src.substring(8,14);
    }
    else
    {
        dst = src;
    }
    
	document.all.titleName.innerHTML = dst;
}

function _msgWirelessSetting(data)
{
	document.all.titleName.innerHTML = "｢접속 경로 "+data+"｣설정";
}

function _msgConnectType1Setting(type1)
{
	text = new Array("미설정","유선","Wi-Fi");
	document.all.conType1.innerHTML = text[type1];
}

function _msgConnectType2Setting(type2)
{
	text = new Array("미설정","유선","Wi-Fi");
	document.all.conType2.innerHTML = text[type2];
}

function _msgConnectType3Setting(type3)
{
	text = new Array("미설정","유선","Wi-Fi");
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
	string2 = "LAN 어댑터 MAC 주소";
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

