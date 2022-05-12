	
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
	
	document.writeln("<meta NAME=\"Version\" CONTENT=\"BPS0132-01 BG\">");
	document.writeln("<title>Резултати от търсенето</title>");
	document.writeln("<LINK href=\"files/_style07.css\" rel=stylesheet>");
	
	document.writeln("<script language=\"javascript\">");
	document.writeln("<!--");
	document.writeln("function goMain(url){");
	document.writeln("	window.opener.location.href=url\;");
	document.writeln("}");
	document.writeln("	--></script>");
	
	document.writeln("</head>");
	document.writeln("<body target=\"main\" bgColor=\"#ffffff\">");

	document.writeln("<div class=\"extra-head\">Резултати от търсенето</div>");

	document.writeln("<div class=\"extra-text\">");
	document.writeln("Резултати от търсенето за : <B>" +keyword.toUpperCase() +"</B>");
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
	document.writeln("Ако не намерите резултатите, които търсите, вижте Съвети за търсене.");
	document.writeln("</div>");
	document.writeln("<div class=\"extra-link\">");
	
	document.writeln("<a href=\"javascript:goMain(\'sch.htm\')\">Съвети за търсене</a>");
	
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
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-00800"
descArray[arraycount] = "0 наклонена черта"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-00400"
descArray[arraycount] = "AАвтоматично преместване на нов ред"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "soft_6.htm#S-00400-00900"
descArray[arraycount] = "Bi-D Adjustment (Bi-D настройка)"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "soft_2.htm#S-00400-00200"
descArray[arraycount] = "EPSON Status Monitor 3"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "soft_5.htm#S-00400-00500"
descArray[arraycount] = "EPSON Status Monitor 3"
	
arraycount += 1
	
namesArray[arraycount] = "EPSON Status Monitor 3"
urlsArray[arraycount] = "soft_5.htm#S-00400-00500-00200"
descArray[arraycount] = "достъп"
	
arraycount += 1
	
namesArray[arraycount] = "EPSON Status Monitor 3"
urlsArray[arraycount] = "soft_5.htm#S-00400-00500-00100"
descArray[arraycount] = "настройка"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "apspe_3.htm#S-00900-00300-00100"
descArray[arraycount] = "ESC/P"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-00900"
descArray[arraycount] = "I/F (интерфейс) режим"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "apspe_3.htm#S-00900-00300-00300"
descArray[arraycount] = "IBM PPDS"
	
arraycount += 1
	
namesArray[arraycount] = "IBM таблица на символите"
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-01800"
descArray[arraycount] = "настройка по подразбиране"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "paper_1.htm#S-00300-00300-00600-00300"
descArray[arraycount] = "Micro adjust (Микронастройка)"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "paper_1.htm#S-00300-00300-00500"
descArray[arraycount] = "Micro Adjust (Микронастройка)"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "paper_1.htm#S-00300-00300-00600"
descArray[arraycount] = "Micro Adjust (Микронастройка)"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-02000"
descArray[arraycount] = "PТаймер за изключване"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "soft_2.htm#S-00400-00200"
descArray[arraycount] = "Status Monitor 3"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "soft_5.htm#S-00400-00500"
descArray[arraycount] = "Status Monitor 3"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-00900"
descArray[arraycount] = "USB интерфейс"
	
arraycount += 1
	
namesArray[arraycount] = "USB интерфейс"
urlsArray[arraycount] = "trble_3.htm#S-00600-00300"
descArray[arraycount] = "проблеми"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-01000"
descArray[arraycount] = "Автоматичен I/F (интерфейс) време за изчакване"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-01300"
descArray[arraycount] = "Автоматично CR (връщане на каретка)"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-00300"
descArray[arraycount] = "Автоматично откъсване"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_1.htm#S-00500-00100"
descArray[arraycount] = "Бутони"
	
arraycount += 1
	
namesArray[arraycount] = "Вграден шрифт"
urlsArray[arraycount] = "cntrl_1.htm#S-00500-00100-00200"
descArray[arraycount] = "избор"
	
arraycount += 1
	
namesArray[arraycount] = "Вграден шрифт"
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00200"
descArray[arraycount] = "списък"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-02300"
descArray[arraycount] = "Време на изчакване при ръчно подаване"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-00500"
descArray[arraycount] = "Двупосочно (Bi-d) отпечатване"
	
arraycount += 1
	
namesArray[arraycount] = "Деинсталиране"
urlsArray[arraycount] = "soft_10.htm#S-00400-00800"
descArray[arraycount] = "софтуер за принтера"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "soft_2.htm#S-00400-00200"
descArray[arraycount] = "Драйвер (драйвер на принтера)"
	
arraycount += 1
	
namesArray[arraycount] = "Драйвер за принер"
urlsArray[arraycount] = "soft_3.htm#S-00400-00300-00300"
descArray[arraycount] = "настройки"
	
arraycount += 1
	
namesArray[arraycount] = "Драйвер за принтер"
urlsArray[arraycount] = "soft_10.htm#S-00400-00800"
descArray[arraycount] = "деинсталиране"
	
arraycount += 1
	
namesArray[arraycount] = "Драйвер за принтер"
urlsArray[arraycount] = "soft_4.htm#S-00400-00400"
descArray[arraycount] = "настройки"
	
arraycount += 1
	
namesArray[arraycount] = "Драйвер за принтера"
urlsArray[arraycount] = "soft_3.htm#S-00400-00300"
descArray[arraycount] = "достъп"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-01700"
descArray[arraycount] = "Дължина на данните"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-00100"
descArray[arraycount] = "Дължина на страницата при използване на устройството за подаване на хартия"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "optn_1.htm#S-00800-00100-00100"
descArray[arraycount] = "Държател на рулонна хартия"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-00500"
descArray[arraycount] = "Еднопосочно (Uni-d) отпечатване"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "trble_4.htm#S-00600-00600"
descArray[arraycount] = "Заседнала хартия, почистване"
	
arraycount += 1
	
namesArray[arraycount] = "Изваждане"
urlsArray[arraycount] = "paper_1.htm#S-00300-00300-00200"
descArray[arraycount] = "отпечатан документ от"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_1.htm#S-00500-00100"
descArray[arraycount] = "Индикатори"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "trble_1.htm#S-00600-00100"
descArray[arraycount] = "Индикация на грешки"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00100"
descArray[arraycount] = "Касета с лента"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "optn_2.htm#S-00800-00200-00100"
descArray[arraycount] = "Касета с лента"
	
arraycount += 1
	
namesArray[arraycount] = "Клиент"
urlsArray[arraycount] = "soft_8.htm#S-00400-00600-00300"
descArray[arraycount] = "с Windows 7, Vista, XP или 2000"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "custo_2.htm#S-00700-00200-00100"
descArray[arraycount] = "Контакт с Epson"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_1.htm#S-00500-00100"
descArray[arraycount] = "Контролен панел"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "trble_1.htm#S-00600-00100"
descArray[arraycount] = "Контролен панел"
	
arraycount += 1
	
namesArray[arraycount] = "Контролен панел"
urlsArray[arraycount] = "cntrl_1.htm#S-00500-00100"
descArray[arraycount] = "бутони"
	
arraycount += 1
	
namesArray[arraycount] = "Контролен панел"
urlsArray[arraycount] = "cntrl_1.htm#S-00500-00100"
descArray[arraycount] = "индикатори"
	
arraycount += 1
	
namesArray[arraycount] = "Контролен панел"
urlsArray[arraycount] = "cntrl_1.htm#S-00500-00100"
descArray[arraycount] = "панел"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "paper_3.htm#S-00300-00500-00400"
descArray[arraycount] = "Лотче за дебелината на хартията"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00200"
descArray[arraycount] = "международни набори символи"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-02200"
descArray[arraycount] = "Международни набори символи за таблица в курсив"
	
arraycount += 1
	
namesArray[arraycount] = "Многопластови формуляри"
urlsArray[arraycount] = "paper_3.htm#S-00300-00500-00100"
descArray[arraycount] = "отпечатване"
	
arraycount += 1
	
namesArray[arraycount] = "Многопластови формуляри"
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00500"
descArray[arraycount] = "характеристики"
	
arraycount += 1
	
namesArray[arraycount] = "Настройване"
urlsArray[arraycount] = "paper_1.htm#S-00300-00300-00500"
descArray[arraycount] = "положение "начало на страница""
	
arraycount += 1
	
namesArray[arraycount] = "Настройване"
urlsArray[arraycount] = "paper_1.htm#S-00300-00300-00600"
descArray[arraycount] = "положение за откъсване"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "paper_1.htm#S-00300-00300-00600-00300"
descArray[arraycount] = "настройка"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "paper_1.htm#S-00300-00300-00600-00300"
descArray[arraycount] = "Настройка"
	
arraycount += 1
	
namesArray[arraycount] = "Настройка"
urlsArray[arraycount] = "paper_1.htm#S-00300-00300-00600-00300"
descArray[arraycount] = "положение за откъсване"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-02400"
descArray[arraycount] = "Настройка на звънец (звуков сигнал)"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "soft_7.htm#S-00400-01000"
descArray[arraycount] = "Настройка на принтера"
	
arraycount += 1
	
namesArray[arraycount] = "Настройки по подразбиране"
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100"
descArray[arraycount] = "списък на опциите"
	
arraycount += 1
	
namesArray[arraycount] = "Непрекъсната хартия"
urlsArray[arraycount] = "paper_1.htm#S-00300-00300"
descArray[arraycount] = "печат"
	
arraycount += 1
	
namesArray[arraycount] = "Непрекъсната хартия"
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00500"
descArray[arraycount] = "характеристики"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "custo_2.htm#S-00700-00200-00100"
descArray[arraycount] = "Обслужване на клиенти"
	
arraycount += 1
	
namesArray[arraycount] = "Опции"
urlsArray[arraycount] = "optn_1.htm#S-00800-00100-00100"
descArray[arraycount] = "Държател на рулонна хартия"
	
arraycount += 1
	
namesArray[arraycount] = "Отделни листове"
urlsArray[arraycount] = "paper_2.htm#S-00300-00400"
descArray[arraycount] = "печат"
	
arraycount += 1
	
namesArray[arraycount] = "Отделни листове"
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00500"
descArray[arraycount] = "характеристики"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "soft_9.htm#S-00400-00700"
descArray[arraycount] = "Отказ от печат"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "paper_1.htm#S-00300-00300-00600-00300"
descArray[arraycount] = "Откъсване"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "paper_1.htm#S-00300-00300-00600"
descArray[arraycount] = "Откъсване"
	
arraycount += 1
	
namesArray[arraycount] = "Откъсване"
urlsArray[arraycount] = "paper_1.htm#S-00300-00300-00600-00200"
descArray[arraycount] = "автоматично"
	
arraycount += 1
	
namesArray[arraycount] = "Откъсване"
urlsArray[arraycount] = "paper_1.htm#S-00300-00300-00600-00100"
descArray[arraycount] = "бутон"
	
arraycount += 1
	
namesArray[arraycount] = "Отстраняване на неизправности"
urlsArray[arraycount] = "trble_4.htm#S-00600-00600"
descArray[arraycount] = "отстраняване на заседнала хартия"
	
arraycount += 1
	
namesArray[arraycount] = "Отстраняване на неизправности"
urlsArray[arraycount] = "trble_3.htm#S-00600-00300"
descArray[arraycount] = "проблеми с USB"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-01200"
descArray[arraycount] = "Пакетен режим"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_1.htm#S-00500-00100"
descArray[arraycount] = "Панел"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-01100"
descArray[arraycount] = "Паралелен I/F (интефейс) двупосочен режим"
	
arraycount += 1
	
namesArray[arraycount] = "Пликове"
urlsArray[arraycount] = "paper_3.htm#S-00300-00500-00300"
descArray[arraycount] = "отпечатване"
	
arraycount += 1
	
namesArray[arraycount] = "Пликове"
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00500"
descArray[arraycount] = "характеристики"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "trble_5.htm#S-00600-00500"
descArray[arraycount] = "Подравняване на вертикални линии"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00700"
descArray[arraycount] = "Подравняване на хартия"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-00500"
descArray[arraycount] = "Посока на отпечатване"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "apspe_5.htm#S-00900-00500"
descArray[arraycount] = "Почистване на принтера"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00600"
descArray[arraycount] = "Препоръчителна зона за печат"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-00200"
descArray[arraycount] = "Прескачане на перфорация"
	
arraycount += 1
	
namesArray[arraycount] = "Принтер"
urlsArray[arraycount] = "soft_8.htm#S-00400-00600-00100"
descArray[arraycount] = "споделяне"
	
arraycount += 1
	
namesArray[arraycount] = "Регулиране"
urlsArray[arraycount] = "paper_3.htm#S-00300-00500-00400"
descArray[arraycount] = "лостче за дебелината на хартията"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00200"
descArray[arraycount] = "Режим за настройки по подразбиране"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_2.htm#S-00500-00300"
descArray[arraycount] = "Режим на заключване"
	
arraycount += 1
	
namesArray[arraycount] = "Рулонна хартия"
urlsArray[arraycount] = "optn_1.htm#S-00800-00100-00100"
descArray[arraycount] = "печат"
	
arraycount += 1
	
namesArray[arraycount] = "Рулонна хартия"
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00500"
descArray[arraycount] = "спецификация"
	
arraycount += 1
	
namesArray[arraycount] = "Ръкохватка"
urlsArray[arraycount] = "trble_4.htm#S-00600-00600"
descArray[arraycount] = "принтер"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "trble_5.htm#S-00600-00500"
descArray[arraycount] = "Самодиагностика"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-01500"
descArray[arraycount] = "Скорост в бодове"
	
arraycount += 1
	
namesArray[arraycount] = "Софтуер"
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-00700"
descArray[arraycount] = "настройка по подразбиране"
	
arraycount += 1
	
namesArray[arraycount] = "Спецификации"
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00200"
descArray[arraycount] = "международни набори символи"
	
arraycount += 1
	
namesArray[arraycount] = "Спецификации"
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00600"
descArray[arraycount] = "препоръчителна зона за печат"
	
arraycount += 1
	
namesArray[arraycount] = "Списъци с команди"
urlsArray[arraycount] = "apspe_3.htm#S-00900-00300-00100"
descArray[arraycount] = "ESC/P"
	
arraycount += 1
	
namesArray[arraycount] = "Списъци с команди"
urlsArray[arraycount] = "apspe_3.htm#S-00900-00300-00300"
descArray[arraycount] = "IBM PPDS"
	
arraycount += 1
	
namesArray[arraycount] = "Спящ режим"
urlsArray[arraycount] = "cntrl_1.htm#S-00500-00100-00300"
descArray[arraycount] = "операции с панела"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-01400"
descArray[arraycount] = "Стъпка"
	
arraycount += 1
	
namesArray[arraycount] = "Сървър"
urlsArray[arraycount] = "soft_8.htm#S-00400-00600-00200"
descArray[arraycount] = "с Windows 7, Vista, XP или 2000"
	
arraycount += 1
	
namesArray[arraycount] = "Таблица на символите"
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00200"
descArray[arraycount] = "списък"
	
arraycount += 1
	
namesArray[arraycount] = "Таблици на символите"
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-02100"
descArray[arraycount] = "настройка"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "custo_2.htm#S-00700-00200-00100"
descArray[arraycount] = "Техническа поддръжка"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-01900"
descArray[arraycount] = "Тих режим"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "apspe_6.htm#S-00900-00600"
descArray[arraycount] = "Транспортиране на принтера"
	
arraycount += 1
	
namesArray[arraycount] = "Характеристики"
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00300"
descArray[arraycount] = "електрически"
	
arraycount += 1
	
namesArray[arraycount] = "Характеристики"
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00200"
descArray[arraycount] = "електронни"
	
arraycount += 1
	
namesArray[arraycount] = "Характеристики"
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00100"
descArray[arraycount] = "механични"
	
arraycount += 1
	
namesArray[arraycount] = "Характеристики"
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00700"
descArray[arraycount] = "подравняване на хартия"
	
arraycount += 1
	
namesArray[arraycount] = "Характеристики"
urlsArray[arraycount] = "apspe_3.htm#S-00900-00300-00100"
descArray[arraycount] = "списъци с команди"
	
arraycount += 1
	
namesArray[arraycount] = "Характеристики"
urlsArray[arraycount] = "apspe_3.htm#S-00900-00300-00300"
descArray[arraycount] = "списъци с команди"
	
arraycount += 1
	
namesArray[arraycount] = "Характеристики"
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00400"
descArray[arraycount] = "среда"
	
arraycount += 1
	
namesArray[arraycount] = "Характеристики"
urlsArray[arraycount] = "apspe_4.htm#S-00900-00400"
descArray[arraycount] = "стандарти и одобрения"
	
arraycount += 1
	
namesArray[arraycount] = "Характеристики"
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00200"
descArray[arraycount] = "таблици на символите"
	
arraycount += 1
	
namesArray[arraycount] = "Характеристики"
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00500"
descArray[arraycount] = "хартия"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00500"
descArray[arraycount] = "Характеристики на хартията"
	
arraycount += 1
	
namesArray[arraycount] = "Харектеристики"
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00200"
descArray[arraycount] = "вграден шрифт"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-01600"
descArray[arraycount] = "Четност"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-02200"
descArray[arraycount] = "Шрифт"
	

// ---- search target end -----

linksize = arraycount;



// ----end data -------

// final stuff
// the main program ---

jsi = new makeLinks(linksize);
document.write("<title>Резултати от търсенето</title><body bgcolor=white>");

	