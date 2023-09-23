function init_index01()
{
	document.all.myVer.innerHTML = wii.version;
}

function waitNWCFuncResult_index02()
{
	result = wii.funcResult;
	switch( result )
	{
	case 0: 
	case 1: setTimeout("waitNWCFuncResult_index02()",200); break;
	case 5: location.href = "Internet/Internet_index.html"; break;
	case 6: nwc24 = wii.nwc24;
		if( nwc24 == 0 )
		{
			location.href = "WiiConnect24/Wiiconnect24_off_index.html";
		}
		else
		{
			location.href = "WiiConnect24/Wiiconnect24_index.html";
		}
		break;
	case 7: location.href = "index02.html"; break;
	case 8: location.href = "Update/Update_index.html"; break;
	}
}

function checkNWCFlag_index02()
{
	_commonSetFuncID(3,78);
	setTimeout("waitNWCFuncResult_index02()",200);
}

function jumpNWC24_index02()
{
	nwc24 = wii.nwc24;
	if( nwc24 == 0 )
	{
		jpURL = "WiiConnect24/Wiiconnect24_off_index.html";
	}
	else
	{
		jpURL = "WiiConnect24/Wiiconnect24_index.html";
	}
	location.href = jpURL;
}

function jumpPare_index02()
{
	flag = wii.pare_flag;
	if( flag == 0 )
	{
		jpURL = "Parental_Control/Parental_Control_index.html";
	}
	else
	{
		jpURL = "Parental_Control/Re_Parental_Control_index.html";
	}
	location.href = jpURL;
	wii.se = 3;
}

function setParentalDialog_index02()
{
	wii.se = 3;
	wii.funcID =29;
	setTimeout("waitFuncResult_index02()",1000);
}

function waitFuncResult_index02()
{
	result = wii.funcResult;
	switch( result )
	{
	case 0: setTimeout("waitFuncResult_index02()",1000); break;
	case 1: location.href = "Internet/Internet_index.html";	break;
	}
}

function init_index02(){
wii.funcID = 23;
}

function setParentalDialog_index03()
{
	wii.se = 3;
	wii.funcID =29;
	setTimeout("waitFuncResult_index03()",1000);
}

function waitFuncResult_index03()
{
	result = wii.funcResult;
	switch( result )
	{
	case 0: setTimeout("waitFuncResult_index03()",1000); break;
	case 1: location.href = "Format/Format_index01.html"; break;
	}
}

function setParentalDialogUpdate_index03()
{
	wii.se = 3;
	wii.funcID =29;
	setTimeout("waitFuncResultUpdate_index03()",1000);
}

function waitFuncResultUpdate_index03()
{
	result = wii.funcResult;
	switch( result )
	{
	case 0: setTimeout("waitFuncResultUpdate_index03()",1000); break;
	case 1: wii.funcID = 95;
		location.href = "Update/Update_index.html"; break;
	}
}

function Index03_ItemCountry_setParentalDialog()
{
	wii.se = 3;
	wii.funcID =29;
	setTimeout("waitFuncResult_Index03_ItemCountry_setParentalDialog()",1000);
}

function waitFuncResult_Index03_ItemCountry_setParentalDialog()
{
	result = wii.funcResult;
	switch( result )
	{
	case 0: setTimeout("waitFuncResult_Index03_ItemCountry_setParentalDialog()",1000); break;
	case 1: location.href = "Country/US_Country_flame.html"; 
		wii.countrySave = 0;
		break;
	}
}

function Index03_ItemCountry_setParentalDialogEU()
{
	wii.se = 3;
	wii.funcID =29;
	setTimeout("waitFuncResult_Index03_ItemCountry_setParentalDialogEU()",1000);
}

function waitFuncResult_Index03_ItemCountry_setParentalDialogEU()
{
	result = wii.funcResult;
	switch( result )
	{
	case 0: setTimeout("waitFuncResult_Index03_ItemCountry_setParentalDialogEU()",1000); break;
	case 1: location.href = "Country/EU_Country_flame.html"; 
		wii.countrySave = 0;
		break;
	}
}


function init_index03(){
wii.funcID = 94;
}

function setSaveLang_index03()
{
	wii.languageSave = 0;
	wii.se = 3;
}
