	
var key = "";

// Search mode AND(1) OR(0)
var	SWay = 1;


function makeEntry (){
	this.Name="";
	this.URL = "";
	this.Desc = "";
	this.Category = "";
	return this;
}

function makeArray(n) {
	this.length = n;
	for (var k = 1; k <= n; k++) {
		this[k] = "";
	}
	return this;
}

function makeLinks(size) {
	this.length = size;
	for (var r=1; r<= size; r++) {
		this[r] = new makeEntry();
		this[r].Name = namesArray[r];
		this[r].URL = urlsArray[r];
		this[r].Desc = descArray[r];
	}
	return this;
}

function showAll(linkobj) {
	for (var s=1; s<= linkobj.length; s++) {
		showLink(linkobj,s);
	}
}

function showLink (links, index) {
	document.write("<tr><td>" + links[index].Name + "</td>");
	document.write("<td><a href=" + links[index].URL + ">" + links[index].Desc + "</a></td></tr>");
}


function makeSrchKey() {
	this.SrchKeyIndex="";
	this.DataIndex = "";
	return this;
}

function makeSrchKeyList(size) {	
	this.length = size;
	for (var r=0; r< size; r++) {
		this[r] = new makeSrchKey();
		this[r].SrchKeyIndex = "";
		this[r].DataLength = "";
	}
	return this;

}

function getSWay(){
	var way = 1;
	if( navigator.appName.charAt(0) != "N"){
		way = SWay;
	}
	return way;
}



function resopen()
{
	winOpen('epsonwin4','result.htm',0,80,385,iheight-150);
	
	if(navigator.appName.indexOf("Netscape") != -1){
		return false;
	}
}

function searchLinks(links, keyword){
	var searchWay = getSWay();

	var srchlinksize=0

	var srchnamesArray = new makeArray(srchlinksize);
	var srchurlsArray = new makeArray(srchlinksize);
	var srchdescArray = new makeArray(srchlinksize);


	var srcharraycount=0


	var newkey;


	keyword=keyword.replace(/&/g,"&amp;")
	keyword=keyword.replace(/</g,"&lt;")
	keyword=keyword.replace(/>/g,"&gt;")
	keyword=keyword.replace(/"/g,"&quot;")

	if (keyword != null) {
		newkey=keyword.toLowerCase();
	}
	
	var strsplittmp;
	strsplittmp = newkey.split(" ");
	
	var i;

	for (var q=1; q<=links.length; q++) {
		var newdesc=links[q].Desc.toLowerCase();
		var newname=links[q].Name.toLowerCase();

		var bRet = 0;
		if (searchWay == 1){
			if(newdesc.indexOf(newkey) != -1) {
				bRet = 1;
			} else {
				var strSearch;
				bRet = 1;
				for (i=0; i<strsplittmp.length; i++) {
					strSearch = strsplittmp[i];
					if(newdesc.indexOf(strSearch) == -1){
						bRet = 0;
						break;
					}
				}
			}
		} else {
			var strSearch;
			if(strsplittmp.length == 1){
				if(newdesc.indexOf(newkey) != -1) {
					bRet = 1;
				}
			} else {
				for (i=0; i<strsplittmp.length; i++) {
					strSearch = strsplittmp[i];
					if(newdesc.indexOf(strSearch) != -1){
						bRet = 1;
					}
				}
			}
		}
		
		if(bRet == 1){
			srchnamesArray[srcharraycount] = links[q].Name;
			srchurlsArray[srcharraycount] = links[q].URL;
			srchdescArray[srcharraycount] = links[q].Desc;
			srcharraycount += 1;
			continue;
		}

		var bRet = 0;
		if (searchWay == 1){
			if(newname.indexOf(newkey) != -1) {
				bRet = 1;
			} else {
				var strSearch;
				bRet = 1;
				for (i=0; i<strsplittmp.length; i++) {
					strSearch = strsplittmp[i];
					if(newname.indexOf(strSearch) == -1){
						bRet = 0;
						break;
					}
				}
			}
		} else {
			var strSearch;
			if(strsplittmp.length == 1){
				if(newname.indexOf(newkey) != -1) {
					bRet = 1;
				}
			} else {
				for (i=0; i<strsplittmp.length; i++) {
					strSearch = strsplittmp[i];
					if(newname.indexOf(strSearch) != -1){
						bRet = 1;
						break;
					}
				}
			}
		}
		
		if(bRet == 1){
			srchnamesArray[srcharraycount] = links[q].Name;
			srchurlsArray[srcharraycount] = links[q].URL;
			srchdescArray[srcharraycount] = links[q].Desc;
			srcharraycount += 1;
			continue;
		}
	}

	var strsplittmp;
	strsplittmp = newkey.split(" ");
	var SrchKeylist = new makeSrchKeyList(strsplittmp.length);


	
	srchlinksize = srcharraycount;

	document.open();

	document.writeln("<!-- saved from url=(0013)about:internet -->");
	document.writeln("<html>");
	document.writeln("<head>");
	
	document.writeln("<meta http-equiv=\"content-type\" content=\"text/html;charset=UTF-8\">");
	
	document.writeln("<meta NAME=\"Version\" CONTENT=\"BPS0132-01 AR\">");
	document.writeln("<title>نتائج البحث</title>");
	document.writeln("<LINK href=\"files/_style07.css\" rel=stylesheet>");
	
	document.writeln("<script language=\"javascript\">");
	document.writeln("<!--");
	document.writeln("function goMain(url){");
	document.writeln("	window.opener.location.href=url\;");
	document.writeln("}");
	document.writeln("	--></script>");
	
	document.writeln("</head>");
	document.writeln("<body target=\"main\" bgColor=\"#ffffff\">");

	document.writeln("<div class=\"extra-head\">نتائج البحث</div>");

	document.writeln("<div class=\"extra-text\">");
	document.writeln("نتائج البحث عن: <B>" +keyword.toUpperCase() +"</B>");
	document.writeln("</div>");
	document.writeln("<!-- KeyWord Start -->");

	newkey=keyword.toLowerCase();


	var strsplittmp;
	strsplittmp = newkey.split(" ");
	var strSearch = strsplittmp[0];
	
	for (var q=0; q<srchlinksize; q++) {
		var iIndex;
		var newDst=srchnamesArray[q].toLowerCase();
		if(srchnamesArray[q].length == 0){
			var newdsc = srchdescArray[q].toLowerCase();
			
			for(var iCnt=0; iCnt<strsplittmp.length; iCnt++){
				var strSearch = strsplittmp[iCnt];
				iIndex = newdsc.indexOf(strSearch);
				if (searchWay == 1){ //AND
					if(iIndex == -1){
						break;
					}
				} else { //OR
					if(iIndex != -1){
						break;
					}
				}
			}
			var ihit = 0;
			if(iIndex != -1){
				var datatmp = srchdescArray[q].toLowerCase();
				for(var iCnt=0; iCnt<strsplittmp.length; iCnt++){
					var strSearch = strsplittmp[iCnt];
					if(datatmp.indexOf(strSearch) == -1){
						SrchKeylist[iCnt].SrchKeyIndex = datatmp.length;
						SrchKeylist[iCnt].DataLength = 0;
						continue;
					}
					SrchKeylist[iCnt].SrchKeyIndex = datatmp.indexOf(strSearch);
					SrchKeylist[iCnt].DataLength = strSearch.length;
					var iflag=1;
					for(var iCnt3=0; iCnt3<iCnt; iCnt3++){
						if((SrchKeylist[iCnt].SrchKeyIndex > SrchKeylist[iCnt3].SrchKeyIndex) && (SrchKeylist[iCnt].SrchKeyIndex < (SrchKeylist[iCnt3].SrchKeyIndex + SrchKeylist[iCnt3].DataLength))){
							SrchKeylist[iCnt].SrchKeyIndex = datatmp.length;
							SrchKeylist[iCnt].DataLength = 0;
							iflag=0;
							break;	
						}
					}
					if(iflag == 0){
						continue;
					}
					for(var iCnt3=iCnt - 1; iCnt3>=0; iCnt3--){
						if((SrchKeylist[iCnt].SrchKeyIndex < SrchKeylist[iCnt3].SrchKeyIndex) && ((SrchKeylist[iCnt].SrchKeyIndex + SrchKeylist[iCnt].DataLength) > (SrchKeylist[iCnt3].SrchKeyIndex + SrchKeylist[iCnt3].DataLength))){
							SrchKeylist[iCnt3].SrchKeyIndex = datatmp.length;
							SrchKeylist[iCnt3].DataLength = 0;
							ihit--;
						}
					}
					ihit++;
				}

				for(iCnt=0; iCnt<strsplittmp.length - 1; iCnt++){
					for (var iCnt2=1; iCnt2<strsplittmp.length; iCnt2++){
						if(SrchKeylist[iCnt].SrchKeyIndex > SrchKeylist[iCnt2].SrchKeyIndex){
							var SrchKeyIndextemp = SrchKeylist[iCnt].SrchKeyIndex;
							var DataLengthtemp = SrchKeylist[iCnt].DataLength;
							SrchKeylist[iCnt].SrchKeyIndex = SrchKeylist[iCnt2].SrchKeyIndex;
							SrchKeylist[iCnt].DataLength = SrchKeylist[iCnt2].DataLength;
							SrchKeylist[iCnt2].SrchKeyIndex = SrchKeyIndextemp;
							SrchKeylist[iCnt2].DataLength = DataLengthtemp;
						}
					}
				}

				document.write("<div class=\"result-text\">" + srchdescArray[q].substring(0, SrchKeylist[0].SrchKeyIndex));
				for(iCnt=0; iCnt<ihit; iCnt++){
					if(iCnt < (ihit - 1)){
						document.write("<font color=\"red\">" + srchdescArray[q].substring(SrchKeylist[iCnt].SrchKeyIndex, SrchKeylist[iCnt].SrchKeyIndex + SrchKeylist[iCnt].DataLength) + "</font>" + srchdescArray[q].substring(SrchKeylist[iCnt].SrchKeyIndex + SrchKeylist[iCnt].DataLength, SrchKeylist[iCnt + 1].SrchKeyIndex));
					} else {
						document.write("<font color=\"red\">" + srchdescArray[q].substring(SrchKeylist[iCnt].SrchKeyIndex, SrchKeylist[iCnt].SrchKeyIndex + SrchKeylist[iCnt].DataLength) + "</font>" + srchdescArray[q].substring(SrchKeylist[iCnt].SrchKeyIndex + SrchKeylist[iCnt].DataLength, srchdescArray[q].length));
					}
				}
				document.write("</div>");
				
			}else {
				document.write("<div class=\"result-text\">" + srchdescArray[q] + "</div>");
			}
		} else {
			iIndex = newDst.indexOf(strSearch);
			for(var iCnt=0; iCnt<strsplittmp.length; iCnt++){
				var strSearch = strsplittmp[iCnt];
				iIndex = newDst.indexOf(strSearch);
				if (searchWay == 1){ //AND
					if(iIndex == -1){
						break;
					}
				} else { //OR
					if(iIndex != -1){
						break;
					}
				}
			}
			var redflag = 0;
			if(iIndex != -1){
				redflag = 1;
			}
			var markerflag = 0;
			if(q==0){
				markerflag = 1;
			} else {
				var newSrc=srchnamesArray[q-1].toLowerCase();

				if((newSrc.length == 0) || (newDst.indexOf(newSrc) == -1) ||  ( (newDst.indexOf(newSrc) != -1) && (newDst.length != newSrc.length))) {
					markerflag = 1;
				}
			}
			if(markerflag == 1){
				if(redflag == 1){
					
					var datatmp = srchnamesArray[q].toLowerCase();
					var ihit = 0;
					for(var iCnt=0; iCnt<strsplittmp.length; iCnt++){
						var strSearch = strsplittmp[iCnt];
						if(datatmp.indexOf(strSearch) == -1){
							SrchKeylist[iCnt].SrchKeyIndex = datatmp.length;
							SrchKeylist[iCnt].DataLength = 0;
							continue;
						}
						SrchKeylist[iCnt].SrchKeyIndex = datatmp.indexOf(strSearch);
						SrchKeylist[iCnt].DataLength = strSearch.length;
						var iflag=1;
						for(var iCnt3=0; iCnt3<iCnt; iCnt3++){
							if((SrchKeylist[iCnt].SrchKeyIndex > SrchKeylist[iCnt3].SrchKeyIndex) && (SrchKeylist[iCnt].SrchKeyIndex < (SrchKeylist[iCnt3].SrchKeyIndex + SrchKeylist[iCnt3].DataLength))){
								SrchKeylist[iCnt].SrchKeyIndex = datatmp.length;
								SrchKeylist[iCnt].DataLength = 0;
								iflag=0;
								break;	
							}
						}
						if(iflag == 0){
							continue;
						}
						for(var iCnt3=iCnt - 1; iCnt3>=0; iCnt3--){
							if((SrchKeylist[iCnt].SrchKeyIndex < SrchKeylist[iCnt3].SrchKeyIndex) && ((SrchKeylist[iCnt].SrchKeyIndex + SrchKeylist[iCnt].DataLength) > (SrchKeylist[iCnt3].SrchKeyIndex + SrchKeylist[iCnt3].DataLength))){
								SrchKeylist[iCnt3].SrchKeyIndex = datatmp.length;
								SrchKeylist[iCnt3].DataLength = 0;
								ihit--;
							}
						}
						ihit++;
					}
		
					for(iCnt=0; iCnt<strsplittmp.length - 1; iCnt++){
						for (var iCnt2=1; iCnt2<strsplittmp.length; iCnt2++){
							if(SrchKeylist[iCnt].SrchKeyIndex > SrchKeylist[iCnt2].SrchKeyIndex){
								var SrchKeyIndextemp = SrchKeylist[iCnt].SrchKeyIndex;
								var DataLengthtemp = SrchKeylist[iCnt].DataLength;
								SrchKeylist[iCnt].SrchKeyIndex = SrchKeylist[iCnt2].SrchKeyIndex;
								SrchKeylist[iCnt].DataLength = SrchKeylist[iCnt2].DataLength;
								SrchKeylist[iCnt2].SrchKeyIndex = SrchKeyIndextemp;
								SrchKeylist[iCnt2].DataLength = DataLengthtemp;
							}
						}
					}

					document.write("<div class=\"result-text\">" + srchnamesArray[q].substring(0, SrchKeylist[0].SrchKeyIndex));
					for(iCnt=0; iCnt<ihit; iCnt++){
						if(iCnt < (ihit - 1)){
							document.write("<font color=\"red\">" + srchnamesArray[q].substring(SrchKeylist[iCnt].SrchKeyIndex, SrchKeylist[iCnt].SrchKeyIndex + SrchKeylist[iCnt].DataLength) + "</font>" + srchnamesArray[q].substring(SrchKeylist[iCnt].SrchKeyIndex + SrchKeylist[iCnt].DataLength, SrchKeylist[iCnt + 1].SrchKeyIndex));
						} else {
							document.write("<font color=\"red\">" + srchnamesArray[q].substring(SrchKeylist[iCnt].SrchKeyIndex, SrchKeylist[iCnt].SrchKeyIndex + SrchKeylist[iCnt].DataLength) + "</font>" + srchnamesArray[q].substring(SrchKeylist[iCnt].SrchKeyIndex + SrchKeylist[iCnt].DataLength, srchnamesArray[q].length));
						}
					}
				
					document.write("</div>");
					
				} else {
					document.write("<div class=\"result-text\">" + srchnamesArray[q] + "</div>");
				}
			}
		}
		newDst=srchdescArray[q].toLowerCase();
		for(var iCnt=0; iCnt<strsplittmp.length; iCnt++){
			var strSearch = strsplittmp[iCnt];
			iIndex = newDst.indexOf(strSearch);
			if (searchWay == 1){ //AND
				if(iIndex == -1){
					break;
				}
			} else { //OR
				if(iIndex != -1){
					break;
				}
			}
		}
		if(iIndex != -1){
			
			var datatmp = srchdescArray[q].toLowerCase();
			var ihit = 0;
			for(var iCnt=0; iCnt<strsplittmp.length; iCnt++){
				var strSearch = strsplittmp[iCnt];
				if(datatmp.indexOf(strSearch) == -1){
					SrchKeylist[iCnt].SrchKeyIndex = datatmp.length;
					SrchKeylist[iCnt].DataLength = 0;
					continue;
				}
				SrchKeylist[iCnt].SrchKeyIndex = datatmp.indexOf(strSearch);
				SrchKeylist[iCnt].DataLength = strSearch.length;
				var iflag=1;
				for(var iCnt3=0; iCnt3<iCnt; iCnt3++){
					if((SrchKeylist[iCnt].SrchKeyIndex > SrchKeylist[iCnt3].SrchKeyIndex) && (SrchKeylist[iCnt].SrchKeyIndex < (SrchKeylist[iCnt3].SrchKeyIndex + SrchKeylist[iCnt3].DataLength))){
						SrchKeylist[iCnt].SrchKeyIndex = datatmp.length;
						SrchKeylist[iCnt].DataLength = 0;
						iflag=0;
						break;	
					}
				}
				if(iflag == 0){
					continue;
				}
				for(var iCnt3=iCnt - 1; iCnt3>=0; iCnt3--){
					if((SrchKeylist[iCnt].SrchKeyIndex < SrchKeylist[iCnt3].SrchKeyIndex) && ((SrchKeylist[iCnt].SrchKeyIndex + SrchKeylist[iCnt].DataLength) > (SrchKeylist[iCnt3].SrchKeyIndex + SrchKeylist[iCnt3].DataLength))){
						SrchKeylist[iCnt3].SrchKeyIndex = datatmp.length;
						SrchKeylist[iCnt3].DataLength = 0;
						ihit--;
					}
				}
				ihit++;
			}

			for(iCnt=0; iCnt<strsplittmp.length - 1; iCnt++){
				for (var iCnt2=1; iCnt2<strsplittmp.length; iCnt2++){
					if(SrchKeylist[iCnt].SrchKeyIndex > SrchKeylist[iCnt2].SrchKeyIndex){
						var SrchKeyIndextemp = SrchKeylist[iCnt].SrchKeyIndex;
						var DataLengthtemp = SrchKeylist[iCnt].DataLength;
						SrchKeylist[iCnt].SrchKeyIndex = SrchKeylist[iCnt2].SrchKeyIndex;
						SrchKeylist[iCnt].DataLength = SrchKeylist[iCnt2].DataLength;
						SrchKeylist[iCnt2].SrchKeyIndex = SrchKeyIndextemp;
						SrchKeylist[iCnt2].DataLength = DataLengthtemp;
					}
				}
			}

			document.write("<div class=\"result-link\"><a href=\"javascript:goMain(\'" + srchurlsArray[q] + "\')\">" + srchdescArray[q].substring(0, SrchKeylist[0].SrchKeyIndex));
			for(iCnt=0; iCnt<ihit; iCnt++){

				if(iCnt < (ihit - 1)){
					document.write("<font color=\"red\">" + srchdescArray[q].substring(SrchKeylist[iCnt].SrchKeyIndex, SrchKeylist[iCnt].SrchKeyIndex + SrchKeylist[iCnt].DataLength) + "</font>" + srchdescArray[q].substring(SrchKeylist[iCnt].SrchKeyIndex + SrchKeylist[iCnt].DataLength, SrchKeylist[iCnt + 1].SrchKeyIndex));
				} else {
					document.write("<font color=\"red\">" + srchdescArray[q].substring(SrchKeylist[iCnt].SrchKeyIndex, SrchKeylist[iCnt].SrchKeyIndex + SrchKeylist[iCnt].DataLength) + "</font>" + srchdescArray[q].substring(SrchKeylist[iCnt].SrchKeyIndex + SrchKeylist[iCnt].DataLength, srchdescArray[q].length));
				}
			}
			document.write("</a></div>");
			
		} else {
			document.write("<div class=\"result-link\"><a href=\"javascript:goMain(\'" + srchurlsArray[q] + "\')\">" + srchdescArray[q] + "</a></div>");
		}
	}


	document.writeln("");
	document.writeln("<!-- KeyWord End -->");

	document.writeln("<div class=\"extra-foot\">");
	document.writeln("إذا لم تعثر على النتائج التي تبحث عنها، فانظر تلميحات البحث.");
	document.writeln("</div>");
	document.writeln("<div class=\"extra-link\">");
	
	document.writeln("<a href=\"javascript:goMain(\'sch.htm\')\">تلميحات البحث</a>");
	
	document.writeln("</div>");

	document.writeln("<div id=\"closed\"></div>");
	document.writeln("</body>");
	document.writeln("</html>");

	document.close();
}



var linksize=0

namesArray = new makeArray(linksize);
urlsArray = new makeArray(linksize);
descArray = new makeArray(linksize);


var arraycount=0

// ---- search target start -----


arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-00300"
descArray[arraycount] = "Auto tear-off"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "soft_6.htm#S-00400-00900"
descArray[arraycount] = "Bi-D Adjustment (الضبط ثنائي الاتجاه)"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "soft_5.htm#S-00400-00500"
descArray[arraycount] = "EPSON Status Monitor 3"
	
arraycount += 1
	
namesArray[arraycount] = "EPSON Status Monitor 3"
urlsArray[arraycount] = "soft_5.htm#S-00400-00500-00100"
descArray[arraycount] = "إعداد"
	
arraycount += 1
	
namesArray[arraycount] = "EPSON Status Monitor 3"
urlsArray[arraycount] = "soft_5.htm#S-00400-00500-00200"
descArray[arraycount] = "الوصول"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-02000"
descArray[arraycount] = "Power off timer"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "soft_5.htm#S-00400-00500"
descArray[arraycount] = "Status Monitor 3"
	
arraycount += 1
	
namesArray[arraycount] = "Tear-off"
urlsArray[arraycount] = "paper_1.htm#S-00300-00300-00600-00200"
descArray[arraycount] = "تلقائيًا"
	
arraycount += 1
	
namesArray[arraycount] = "Tear-off"
urlsArray[arraycount] = "paper_1.htm#S-00300-00300-00600-00100"
descArray[arraycount] = "زر"
	
arraycount += 1
	
namesArray[arraycount] = "إزالة"
urlsArray[arraycount] = "paper_1.htm#S-00300-00300-00200"
descArray[arraycount] = "مستند مطبوع من"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-02400"
descArray[arraycount] = "إعداد Buzzer (الطنّان)"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "soft_7.htm#S-00400-01000"
descArray[arraycount] = "إعداد الطابعة"
	
arraycount += 1
	
namesArray[arraycount] = "إلغاء التثبيت"
urlsArray[arraycount] = "soft_10.htm#S-00400-00800"
descArray[arraycount] = "برنامج تشغيل الطابعة؛برنامج تشغيل الطابعة"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "soft_9.htm#S-00400-00700"
descArray[arraycount] = "إلغاء الطباعة"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-00500"
descArray[arraycount] = "اتجاه الطباعة وطباعة ثنائية الاتجاه (Bi-D)؛اتجاه طباعة؛ وطباعة أحادية اتجاه (Uni-d)"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "trble_5.htm#S-00600-00500"
descArray[arraycount] = "اختبار ذاتي؛محاذاة السطور الرأسية"
	
arraycount += 1
	
namesArray[arraycount] = "الأظرف"
urlsArray[arraycount] = "paper_3.htm#S-00300-00500-00300"
descArray[arraycount] = "الطباعة"
	
arraycount += 1
	
namesArray[arraycount] = "الأظرف"
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00500"
descArray[arraycount] = "مواصفات"
	
arraycount += 1
	
namesArray[arraycount] = "الإعدادات الافتراضية"
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100"
descArray[arraycount] = "قائمة اختيارية"
	
arraycount += 1
	
namesArray[arraycount] = "البرنامج"
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-00700"
descArray[arraycount] = "إعداد افتراضي"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-01400"
descArray[arraycount] = "التباعد"
	
arraycount += 1
	
namesArray[arraycount] = "التقطيع"
urlsArray[arraycount] = "paper_1.htm#S-00300-00300-00600-00300"
descArray[arraycount] = "الضبط، ضبط"
	
arraycount += 1
	
namesArray[arraycount] = "التقطيع والضبط"
urlsArray[arraycount] = "paper_1.htm#S-00300-00300-00600"
descArray[arraycount] = "موضع التقطيع والضبط الدقيق"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-01600"
descArray[arraycount] = "التماثل"
	
arraycount += 1
	
namesArray[arraycount] = "الصفحات المفردة"
urlsArray[arraycount] = "paper_2.htm#S-00300-00400"
descArray[arraycount] = "الطباعة"
	
arraycount += 1
	
namesArray[arraycount] = "الصفحات المفردة"
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00500"
descArray[arraycount] = "المواصفات"
	
arraycount += 1
	
namesArray[arraycount] = "الطابعة"
urlsArray[arraycount] = "soft_8.htm#S-00400-00600-00100"
descArray[arraycount] = "المشاركة"
	
arraycount += 1
	
namesArray[arraycount] = "الملقم"
urlsArray[arraycount] = "soft_8.htm#S-00400-00600-00200"
descArray[arraycount] = "مع نظام التشغيل Windows 7, Vista, XP, أو 2000"
	
arraycount += 1
	
namesArray[arraycount] = "المواصفات"
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00200"
descArray[arraycount] = "إلكترونية"
	
arraycount += 1
	
namesArray[arraycount] = "المواصفات"
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00300"
descArray[arraycount] = "الفنية"
	
arraycount += 1
	
namesArray[arraycount] = "المواصفات"
urlsArray[arraycount] = "apspe_4.htm#S-00900-00400"
descArray[arraycount] = "المعايير والموافقات"
	
arraycount += 1
	
namesArray[arraycount] = "المواصفات"
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00600"
descArray[arraycount] = "المنطقة القابلة للطباعة الموصى بها؛المنطقة القابلة للطباعة الموصى بها"
	
arraycount += 1
	
namesArray[arraycount] = "المواصفات"
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00500"
descArray[arraycount] = "الورق؛مواصفات الورق"
	
arraycount += 1
	
namesArray[arraycount] = "المواصفات"
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00400"
descArray[arraycount] = "بيئية"
	
arraycount += 1
	
namesArray[arraycount] = "المواصفات"
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00200"
descArray[arraycount] = "جداول الأحرف؛جدول الأحرف"
	
arraycount += 1
	
namesArray[arraycount] = "المواصفات"
urlsArray[arraycount] = "apspe_3.htm#S-00900-00300-00100"
descArray[arraycount] = "قوائم الأوامر"
	
arraycount += 1
	
namesArray[arraycount] = "المواصفات"
urlsArray[arraycount] = "apspe_3.htm#S-00900-00300-00300"
descArray[arraycount] = "قوائم الأوامر"
	
arraycount += 1
	
namesArray[arraycount] = "المواصفات"
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00200"
descArray[arraycount] = "مجموعة أحرف دولية؛مجموعة أحرف دولية"
	
arraycount += 1
	
namesArray[arraycount] = "المواصفات"
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00700"
descArray[arraycount] = "محاذاة الورق؛محاذاة الورق"
	
arraycount += 1
	
namesArray[arraycount] = "المواصفات"
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00100"
descArray[arraycount] = "ميكانيكية"
	
arraycount += 1
	
namesArray[arraycount] = "النماذج متعددة الأجزاء"
urlsArray[arraycount] = "paper_3.htm#S-00300-00500-00100"
descArray[arraycount] = "طباعة"
	
arraycount += 1
	
namesArray[arraycount] = "الورق المتصل"
urlsArray[arraycount] = "paper_1.htm#S-00300-00300"
descArray[arraycount] = "الطباعة"
	
arraycount += 1
	
namesArray[arraycount] = "الورق المتصل"
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00500"
descArray[arraycount] = "مواصفات"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-01100"
descArray[arraycount] = "الوضع ثنائي الاتجاه للواجهة المتوازية"
	
arraycount += 1
	
namesArray[arraycount] = "انحشار الورق، تنظيف؛ معالجة المشكلات"
urlsArray[arraycount] = "trble_4.htm#S-00600-00600"
descArray[arraycount] = "إزالة تكدس الورق؛مقبض"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "soft_2.htm#S-00400-00200"
descArray[arraycount] = "برنامج التشغيل (برنامج تشغيل الطابعة)؛EPSON Status Monitor 3؛Status Monitor 3"
	
arraycount += 1
	
namesArray[arraycount] = "برنامج تشغيل الطابعة"
urlsArray[arraycount] = "soft_3.htm#S-00400-00300-00300"
descArray[arraycount] = "إعدادات"
	
arraycount += 1
	
namesArray[arraycount] = "برنامج تشغيل الطابعة"
urlsArray[arraycount] = "soft_4.htm#S-00400-00400"
descArray[arraycount] = "إعدادات"
	
arraycount += 1
	
namesArray[arraycount] = "برنامج تشغيل الطابعة"
urlsArray[arraycount] = "soft_3.htm#S-00400-00300"
descArray[arraycount] = "الوصول"
	
arraycount += 1
	
namesArray[arraycount] = "بكرة الورق"
urlsArray[arraycount] = "optn_1.htm#S-00800-00100-00100"
descArray[arraycount] = "طباعة؛خيارات"
	
arraycount += 1
	
namesArray[arraycount] = "بكرة الورق"
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00500"
descArray[arraycount] = "مواصفات"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-00200"
descArray[arraycount] = "تخطي الثقوب"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-00400"
descArray[arraycount] = "تغذية السطر تلقائيًا"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "apspe_5.htm#S-00900-00500"
descArray[arraycount] = "تنظيف الطابعة"
	
arraycount += 1
	
namesArray[arraycount] = "جدول أحرف IBM"
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-01800"
descArray[arraycount] = "إعداد افتراضي"
	
arraycount += 1
	
namesArray[arraycount] = "جدول الأحرف"
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-02100"
descArray[arraycount] = "إعداد"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00100"
descArray[arraycount] = "خرطوشة الشريط"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "optn_2.htm#S-00800-00200-00100"
descArray[arraycount] = "خرطوشة الشريط"
	
arraycount += 1
	
namesArray[arraycount] = "خط مُضمَن"
urlsArray[arraycount] = "cntrl_1.htm#S-00500-00100-00200"
descArray[arraycount] = "تحديد"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "custo_2.htm#S-00700-00200-00100"
descArray[arraycount] = "دعم العملاء؛ دعم فني؛ الاتصال بشركة EPSON"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-01300"
descArray[arraycount] = "رجوع تلقائي لأول السطر"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-00800"
descArray[arraycount] = "شرطة 0"
	
arraycount += 1
	
namesArray[arraycount] = "ضبط"
urlsArray[arraycount] = "paper_3.htm#S-00300-00500-00400"
descArray[arraycount] = "ذراع السمك وذراع سمك الورق"
	
arraycount += 1
	
namesArray[arraycount] = "ضبط"
urlsArray[arraycount] = "paper_1.htm#S-00300-00300-00500"
descArray[arraycount] = "موضع أعلى النموذج والضبط الدقيق"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-01700"
descArray[arraycount] = "طول البيانات"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-00100"
descArray[arraycount] = "طول الصفحة للجرار"
	
arraycount += 1
	
namesArray[arraycount] = "عميل"
urlsArray[arraycount] = "soft_8.htm#S-00400-00600-00300"
descArray[arraycount] = "مع نظام التشغيل Windows 7، أو Vista، أو XP، أو 2000"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-01000"
descArray[arraycount] = "فترة انتظار الواجهة التلقائية"
	
arraycount += 1
	
namesArray[arraycount] = "لوحة التحكم"
urlsArray[arraycount] = "cntrl_1.htm#S-00500-00100"
descArray[arraycount] = "أزرار؛لوحة التحكم"
	
arraycount += 1
	
namesArray[arraycount] = "لوحة التحكم"
urlsArray[arraycount] = "cntrl_1.htm#S-00500-00100"
descArray[arraycount] = "لوحة"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_1.htm#S-00500-00100"
descArray[arraycount] = "لوحة التحكم؛أزرار؛مصابيح؛لوحة"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "trble_1.htm#S-00600-00100"
descArray[arraycount] = "مؤشر الخطأ؛لوحة التحكم"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-02200"
descArray[arraycount] = "مجموعة الأحرف الدولية لجدول الخطوط المائلة"
	
arraycount += 1
	
namesArray[arraycount] = "معالجة المشكلات"
urlsArray[arraycount] = "trble_3.htm#S-00600-00300"
descArray[arraycount] = "مشكلات USB؛واجهة USB"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-01500"
descArray[arraycount] = "معدل الاتصال"
	
arraycount += 1
	
namesArray[arraycount] = "مواصفات"
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00200"
descArray[arraycount] = "خطوط مُضمَنة؛خطوط مُضمَنة"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "apspe_6.htm#S-00900-00600"
descArray[arraycount] = "نقل الطابعة"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00500"
descArray[arraycount] = "نماذج الورق المنفصل متعددة الصفحات"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00200"
descArray[arraycount] = "وضع الإعداد الافتراضي"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-01200"
descArray[arraycount] = "وضع الحزمة"
	
arraycount += 1
	
namesArray[arraycount] = "وضع السكون"
urlsArray[arraycount] = "cntrl_1.htm#S-00500-00100-00300"
descArray[arraycount] = "عمليات لوحة التحكم"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-01900"
descArray[arraycount] = "وضع الضوضاء المنخفضة"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_2.htm#S-00500-00300"
descArray[arraycount] = "وضع القفل"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-00900"
descArray[arraycount] = "وضع الواجهة؛ واجهة USB"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-02300"
descArray[arraycount] = "وقت انتظار التغذية اليدوية"
	

// ---- search target end -----

linksize = arraycount;



// ----end data -------

// final stuff
// the main program ---

jsi = new makeLinks(linksize);
document.write("<title>نتائج البحث</title><body bgcolor=white>");

	