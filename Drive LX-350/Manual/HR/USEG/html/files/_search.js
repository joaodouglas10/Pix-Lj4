	
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
	
	document.writeln("<meta NAME=\"Version\" CONTENT=\"BPS0132-01 HR\">");
	document.writeln("<title>Rezultati pretraživanja</title>");
	document.writeln("<LINK href=\"files/_style07.css\" rel=stylesheet>");
	
	document.writeln("<script language=\"javascript\">");
	document.writeln("<!--");
	document.writeln("function goMain(url){");
	document.writeln("	window.opener.location.href=url\;");
	document.writeln("}");
	document.writeln("	--></script>");
	
	document.writeln("</head>");
	document.writeln("<body target=\"main\" bgColor=\"#ffffff\">");

	document.writeln("<div class=\"extra-head\">Rezultati pretraživanja</div>");

	document.writeln("<div class=\"extra-text\">");
	document.writeln("Rezultati pretraživanja za : <B>" +keyword.toUpperCase() +"</B>");
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
	document.writeln("Ako ne pronađete tražene rezultate, pogledajte Savjete za pretraživanje.");
	document.writeln("</div>");
	document.writeln("<div class=\"extra-link\">");
	
	document.writeln("<a href=\"javascript:goMain(\'sch.htm\')\">Savjeti za pretraživanje</a>");
	
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
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-01300"
descArray[arraycount] = "Automatski CR (povrat valjka)"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-00300"
descArray[arraycount] = "Automatsko otkidanje"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-00400"
descArray[arraycount] = "Automatsko povlačenje papira"
	
arraycount += 1
	
namesArray[arraycount] = "Beskonačni papir"
urlsArray[arraycount] = "paper_1.htm#S-00300-00300"
descArray[arraycount] = "ispis"
	
arraycount += 1
	
namesArray[arraycount] = "Beskonačni papir"
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00500"
descArray[arraycount] = "podaci"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "soft_6.htm#S-00400-00900"
descArray[arraycount] = "Bi-D Adjustment (Podešavanje dvosmjernog ispisa)"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-01500"
descArray[arraycount] = "Brzina prijenosa"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "apspe_5.htm#S-00900-00500"
descArray[arraycount] = "Čišćenje pisača"
	
arraycount += 1
	
namesArray[arraycount] = "Deinstalacija"
urlsArray[arraycount] = "soft_10.htm#S-00400-00800"
descArray[arraycount] = "softver pisača"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-01700"
descArray[arraycount] = "Dužina podataka"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-00100"
descArray[arraycount] = "Dužna stranice za mehanizam za ulaganje"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-00500"
descArray[arraycount] = "Dvosmjerni (Bi-d) ispis"
	
arraycount += 1
	
namesArray[arraycount] = "EPSON Status Monitor 3"
urlsArray[arraycount] = "soft_5.htm#S-00400-00500-00100"
descArray[arraycount] = "postavljanje"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "soft_5.htm#S-00400-00500"
descArray[arraycount] = "EPSON Status Monitor 3 (nadzor stanja)"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "soft_2.htm#S-00400-00200"
descArray[arraycount] = "EPSON Status Monitor 3 (nadzor stanja)"
	
arraycount += 1
	
namesArray[arraycount] = "EPSON Status Monitor 3 (nadzor stanja)"
urlsArray[arraycount] = "soft_5.htm#S-00400-00500-00200"
descArray[arraycount] = "pristupanje"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "apspe_3.htm#S-00900-00300-00100"
descArray[arraycount] = "ESC/P"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-02200"
descArray[arraycount] = "Font"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_1.htm#S-00500-00100-00300"
descArray[arraycount] = "Funkcije ploče u stanju mirovanja"
	
arraycount += 1
	
namesArray[arraycount] = "Gumb"
urlsArray[arraycount] = "trble_4.htm#S-00600-00600"
descArray[arraycount] = "pisač"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_1.htm#S-00500-00100"
descArray[arraycount] = "Gumbi"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-00900"
descArray[arraycount] = "I/F (sučelje)"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "apspe_3.htm#S-00900-00300-00300"
descArray[arraycount] = "IBM PPDS"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-00500"
descArray[arraycount] = "Jednosmjerni (Uni-d) ispis"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00100"
descArray[arraycount] = "Kaseta s vrpcom"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "optn_2.htm#S-00800-00200-00100"
descArray[arraycount] = "Kaseta s vrpcom"
	
arraycount += 1
	
namesArray[arraycount] = "Klijent"
urlsArray[arraycount] = "soft_8.htm#S-00400-00600-00300"
descArray[arraycount] = "u sustavima Windows 7, Vista, XP ili 2000"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "custo_2.htm#S-00700-00200-00100"
descArray[arraycount] = "Kontaktiranje Epsona"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "paper_1.htm#S-00300-00300-00500"
descArray[arraycount] = "mikro podešavanje"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "paper_1.htm#S-00300-00300-00600"
descArray[arraycount] = "mikro podešavanje"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "paper_1.htm#S-00300-00300-00600-00300"
descArray[arraycount] = "Mikro podešavanje,"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-02000"
descArray[arraycount] = "Mjerač vremena za isključivanje"
	
arraycount += 1
	
namesArray[arraycount] = "Mogućnosti"
urlsArray[arraycount] = "optn_1.htm#S-00800-00100-00100"
descArray[arraycount] = "držač papira u kolutu"
	
arraycount += 1
	
namesArray[arraycount] = "Omotnice"
urlsArray[arraycount] = "paper_3.htm#S-00300-00500-00300"
descArray[arraycount] = "ispis"
	
arraycount += 1
	
namesArray[arraycount] = "Omotnice"
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00500"
descArray[arraycount] = "podaci"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "paper_1.htm#S-00300-00300-00600"
descArray[arraycount] = "Otkidanje"
	
arraycount += 1
	
namesArray[arraycount] = "Otkidanje"
urlsArray[arraycount] = "paper_1.htm#S-00300-00300-00600-00200"
descArray[arraycount] = "automatsko"
	
arraycount += 1
	
namesArray[arraycount] = "Otkidanje"
urlsArray[arraycount] = "paper_1.htm#S-00300-00300-00600-00100"
descArray[arraycount] = "gumb"
	
arraycount += 1
	
namesArray[arraycount] = "Otkidanje"
urlsArray[arraycount] = "paper_1.htm#S-00300-00300-00600-00300"
descArray[arraycount] = "podešavanje"
	
arraycount += 1
	
namesArray[arraycount] = "Papir u kolutu"
urlsArray[arraycount] = "optn_1.htm#S-00800-00100-00100"
descArray[arraycount] = "ispis"
	
arraycount += 1
	
namesArray[arraycount] = "Papir u kolutu"
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00500"
descArray[arraycount] = "podaci"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-01600"
descArray[arraycount] = "Paritet"
	
arraycount += 1
	
namesArray[arraycount] = "Pisač"
urlsArray[arraycount] = "soft_8.htm#S-00400-00600-00100"
descArray[arraycount] = "zajedničko korištenje"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_1.htm#S-00500-00100"
descArray[arraycount] = "Ploča"
	
arraycount += 1
	
namesArray[arraycount] = "Podaci"
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00300"
descArray[arraycount] = "električni"
	
arraycount += 1
	
namesArray[arraycount] = "Podaci"
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00200"
descArray[arraycount] = "elektronika"
	
arraycount += 1
	
namesArray[arraycount] = "Podaci"
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00100"
descArray[arraycount] = "mehanički"
	
arraycount += 1
	
namesArray[arraycount] = "Podaci"
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00400"
descArray[arraycount] = "okolina"
	
arraycount += 1
	
namesArray[arraycount] = "Podaci"
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00500"
descArray[arraycount] = "papir"
	
arraycount += 1
	
namesArray[arraycount] = "Podaci"
urlsArray[arraycount] = "apspe_3.htm#S-00900-00300-00300"
descArray[arraycount] = "popisi naredbi"
	
arraycount += 1
	
namesArray[arraycount] = "Podaci"
urlsArray[arraycount] = "apspe_3.htm#S-00900-00300-00100"
descArray[arraycount] = "popisi naredbi"
	
arraycount += 1
	
namesArray[arraycount] = "Podaci"
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00700"
descArray[arraycount] = "poravnanje papira"
	
arraycount += 1
	
namesArray[arraycount] = "Podaci"
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00600"
descArray[arraycount] = "preporučeno područje ispisa"
	
arraycount += 1
	
namesArray[arraycount] = "Podaci"
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00200"
descArray[arraycount] = "skupovi međunarodnih znakova"
	
arraycount += 1
	
namesArray[arraycount] = "Podaci"
urlsArray[arraycount] = "apspe_4.htm#S-00900-00400"
descArray[arraycount] = "Standardi i odobrenja"
	
arraycount += 1
	
namesArray[arraycount] = "Podaci"
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00200"
descArray[arraycount] = "tablice znakova"
	
arraycount += 1
	
namesArray[arraycount] = "Podaci"
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00200"
descArray[arraycount] = "ugrađeni font"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00500"
descArray[arraycount] = "Podaci o papiru"
	
arraycount += 1
	
namesArray[arraycount] = "podešavanje"
urlsArray[arraycount] = "paper_1.htm#S-00300-00300-00600"
descArray[arraycount] = "položaj otkidanja"
	
arraycount += 1
	
namesArray[arraycount] = "Podešavanje"
urlsArray[arraycount] = "paper_1.htm#S-00300-00300-00500"
descArray[arraycount] = "položaj gornje ispisne margine"
	
arraycount += 1
	
namesArray[arraycount] = "Podešavanje"
urlsArray[arraycount] = "paper_1.htm#S-00300-00300-00600-00300"
descArray[arraycount] = "položaj otkidanja"
	
arraycount += 1
	
namesArray[arraycount] = "Podešavanje"
urlsArray[arraycount] = "paper_3.htm#S-00300-00500-00400"
descArray[arraycount] = "ručica za debljinu papira"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-02400"
descArray[arraycount] = "Podešavanje zvučnog signala"
	
arraycount += 1
	
namesArray[arraycount] = "Pojedinačni listovi"
urlsArray[arraycount] = "paper_2.htm#S-00300-00400"
descArray[arraycount] = "ispis"
	
arraycount += 1
	
namesArray[arraycount] = "Pojedinačni listovi"
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00500"
descArray[arraycount] = "podaci"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "trble_1.htm#S-00600-00100"
descArray[arraycount] = "Pokazivač greške"
	
arraycount += 1
	
namesArray[arraycount] = "Popis naredbi"
urlsArray[arraycount] = "apspe_3.htm#S-00900-00300-00100"
descArray[arraycount] = "ESC/P"
	
arraycount += 1
	
namesArray[arraycount] = "Popis naredbi"
urlsArray[arraycount] = "apspe_3.htm#S-00900-00300-00300"
descArray[arraycount] = "IBM PPDS"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00700"
descArray[arraycount] = "Poravnanje papira"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "trble_5.htm#S-00600-00500"
descArray[arraycount] = "Poravnanje vertikalnih crta"
	
arraycount += 1
	
namesArray[arraycount] = "Poslužitelj"
urlsArray[arraycount] = "soft_8.htm#S-00400-00600-00200"
descArray[arraycount] = "u sustavima Windows 7, Vista, XP ili 2000"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "soft_7.htm#S-00400-01000"
descArray[arraycount] = "Postavka pisača"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-00800"
descArray[arraycount] = "Precrtana 0"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "soft_9.htm#S-00400-00700"
descArray[arraycount] = "Prekid ispisa"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00600"
descArray[arraycount] = "Preporučeno područje ispisa"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-00200"
descArray[arraycount] = "Preskakanje perforacije"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-01100"
descArray[arraycount] = "Rad paralelnog dvosmjernog sučelja"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-01200"
descArray[arraycount] = "Rad s paketima"
	
arraycount += 1
	
namesArray[arraycount] = "Rješavanje problema"
urlsArray[arraycount] = "trble_4.htm#S-00600-00600"
descArray[arraycount] = "oslobađanje zaglavljenog papira"
	
arraycount += 1
	
namesArray[arraycount] = "Rješavanje problema"
urlsArray[arraycount] = "trble_3.htm#S-00600-00300"
descArray[arraycount] = "Problemi s USB-om"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "paper_3.htm#S-00300-00500-00400"
descArray[arraycount] = "Ručica za debljinu papira"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "trble_5.htm#S-00600-00500"
descArray[arraycount] = "Samoprovjera"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-01400"
descArray[arraycount] = "Širina fonta"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-02200"
descArray[arraycount] = "Skup međunarodnih znakova za tablicu kurziva"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00200"
descArray[arraycount] = "Skupovi međunarodnih znakova"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "custo_2.htm#S-00700-00200-00100"
descArray[arraycount] = "Služba za pomoć korisnicima"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-00500"
descArray[arraycount] = "Smjer ispisa"
	
arraycount += 1
	
namesArray[arraycount] = "Softver"
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-00700"
descArray[arraycount] = "zadana vrijednost"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00200"
descArray[arraycount] = "Stanje mijenjanja zadanih postavki"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "soft_5.htm#S-00400-00500"
descArray[arraycount] = "Status Monitor 3 (nadzor stanja)"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "soft_2.htm#S-00400-00200"
descArray[arraycount] = "Status Monitor 3 (nadzor stanja)"
	
arraycount += 1
	
namesArray[arraycount] = "Tablica IBM znakova"
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-01800"
descArray[arraycount] = "zadana vrijednost"
	
arraycount += 1
	
namesArray[arraycount] = "Tablica znakova"
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-02100"
descArray[arraycount] = "podešavanje"
	
arraycount += 1
	
namesArray[arraycount] = "Tablica znakova"
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00200"
descArray[arraycount] = "popis"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "custo_2.htm#S-00700-00200-00100"
descArray[arraycount] = "Tehnička podrška"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-01900"
descArray[arraycount] = "Tihi način rada"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "apspe_6.htm#S-00900-00600"
descArray[arraycount] = "Transport pisača"
	
arraycount += 1
	
namesArray[arraycount] = "Ugrađeni font"
urlsArray[arraycount] = "cntrl_1.htm#S-00500-00100-00200"
descArray[arraycount] = "odabir"
	
arraycount += 1
	
namesArray[arraycount] = "Ugrađeni font"
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00200"
descArray[arraycount] = "popis"
	
arraycount += 1
	
namesArray[arraycount] = "Uklanjanje"
urlsArray[arraycount] = "paper_1.htm#S-00300-00300-00200"
descArray[arraycount] = "ispisani dokument iz"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_1.htm#S-00500-00100"
descArray[arraycount] = "Upravljačka ploča"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "trble_1.htm#S-00600-00100"
descArray[arraycount] = "Upravljačka ploča"
	
arraycount += 1
	
namesArray[arraycount] = "Upravljačka ploča"
urlsArray[arraycount] = "cntrl_1.htm#S-00500-00100"
descArray[arraycount] = "gumbi"
	
arraycount += 1
	
namesArray[arraycount] = "Upravljačka ploča"
urlsArray[arraycount] = "cntrl_1.htm#S-00500-00100"
descArray[arraycount] = "ploča"
	
arraycount += 1
	
namesArray[arraycount] = "Upravljačka ploča"
urlsArray[arraycount] = "cntrl_1.htm#S-00500-00100"
descArray[arraycount] = "žaruljice"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "soft_2.htm#S-00400-00200"
descArray[arraycount] = "Upravljački program (upravljački program pisača)"
	
arraycount += 1
	
namesArray[arraycount] = "Upravljački program pisača"
urlsArray[arraycount] = "soft_4.htm#S-00400-00400"
descArray[arraycount] = "postavke"
	
arraycount += 1
	
namesArray[arraycount] = "Upravljački program pisača"
urlsArray[arraycount] = "soft_3.htm#S-00400-00300-00300"
descArray[arraycount] = "postavke"
	
arraycount += 1
	
namesArray[arraycount] = "Upravljački program pisača"
urlsArray[arraycount] = "soft_3.htm#S-00400-00300"
descArray[arraycount] = "pristupanje"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-00900"
descArray[arraycount] = "USB sučelje"
	
arraycount += 1
	
namesArray[arraycount] = "USB sučelje"
urlsArray[arraycount] = "trble_3.htm#S-00600-00300"
descArray[arraycount] = "problemi"
	
arraycount += 1
	
namesArray[arraycount] = "Višedijelni obrasci"
urlsArray[arraycount] = "paper_3.htm#S-00300-00500-00100"
descArray[arraycount] = "ispis"
	
arraycount += 1
	
namesArray[arraycount] = "Višedijelni obrasci"
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00500"
descArray[arraycount] = "podaci"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-01000"
descArray[arraycount] = "Vrijeme čekanja automatskog rada sučelja"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-02300"
descArray[arraycount] = "Vrijeme čekanja na ručno povlačenje"
	
arraycount += 1
	
namesArray[arraycount] = "Zadane postavke"
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100"
descArray[arraycount] = "popis mogućnosti"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "trble_4.htm#S-00600-00600"
descArray[arraycount] = "Zaglavljeni papir, oslobađanje"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_2.htm#S-00500-00300"
descArray[arraycount] = "Zaključavanje"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_1.htm#S-00500-00100"
descArray[arraycount] = "Žaruljice"
	

// ---- search target end -----

linksize = arraycount;



// ----end data -------

// final stuff
// the main program ---

jsi = new makeLinks(linksize);
document.write("<title>Rezultati pretraživanja</title><body bgcolor=white>");

	