	
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
	
	document.writeln("<meta NAME=\"Version\" CONTENT=\"BPS0132-01 FR\">");
	document.writeln("<title>Résultats de la recherche</title>");
	document.writeln("<LINK href=\"files/_style07.css\" rel=stylesheet>");
	
	document.writeln("<script language=\"javascript\">");
	document.writeln("<!--");
	document.writeln("function goMain(url){");
	document.writeln("	window.opener.location.href=url\;");
	document.writeln("}");
	document.writeln("	--></script>");
	
	document.writeln("</head>");
	document.writeln("<body target=\"main\" bgColor=\"#ffffff\">");

	document.writeln("<div class=\"extra-head\">Résultats de la recherche</div>");

	document.writeln("<div class=\"extra-text\">");
	document.writeln("Résultats de la recherche pour : <B>" +keyword.toUpperCase() +"</B>");
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
	document.writeln("Si vous ne trouvez pas les résultats que vous souhaitez, consultez les astuces de recherche.");
	document.writeln("</div>");
	document.writeln("<div class=\"extra-link\">");
	
	document.writeln("<a href=\"javascript:goMain(\'sch.htm\')\">Astuces de recherche</a>");
	
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
descArray[arraycount] = "0 barré"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "trble_5.htm#S-00600-00500"
descArray[arraycount] = "Alignement des lignes verticales"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00700"
descArray[arraycount] = "Alignement du papier"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "soft_9.htm#S-00400-00700"
descArray[arraycount] = "Annulation de l'impression"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "trble_5.htm#S-00600-00500"
descArray[arraycount] = "Autotest"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "trble_4.htm#S-00600-00600"
descArray[arraycount] = "Bourrage papier, élimination"
	
arraycount += 1
	
namesArray[arraycount] = "Bouton"
urlsArray[arraycount] = "trble_4.htm#S-00600-00600"
descArray[arraycount] = "imprimante"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00100"
descArray[arraycount] = "Cartouche de ruban"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "optn_2.htm#S-00800-00200-00100"
descArray[arraycount] = "Cartouche de ruban"
	
arraycount += 1
	
namesArray[arraycount] = "Client"
urlsArray[arraycount] = "soft_8.htm#S-00400-00600-00300"
descArray[arraycount] = "sous Windows 7, Vista, XP ou 2000"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "custo_2.htm#S-00700-00200-00100"
descArray[arraycount] = "Contacter EPSON"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-01300"
descArray[arraycount] = "CR auto (retour chariot)"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "paper_1.htm#S-00300-00300-00600"
descArray[arraycount] = "Dégagement"
	
arraycount += 1
	
namesArray[arraycount] = "Dégagement"
urlsArray[arraycount] = "paper_1.htm#S-00300-00300-00600-00200"
descArray[arraycount] = "automatiquement"
	
arraycount += 1
	
namesArray[arraycount] = "Dégagement"
urlsArray[arraycount] = "paper_1.htm#S-00300-00300-00600-00100"
descArray[arraycount] = "bouton"
	
arraycount += 1
	
namesArray[arraycount] = "Dégagement"
urlsArray[arraycount] = "paper_1.htm#S-00300-00300-00600-00300"
descArray[arraycount] = "réglage"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-00300"
descArray[arraycount] = "Dégagement auto"
	
arraycount += 1
	
namesArray[arraycount] = "Dépannage"
urlsArray[arraycount] = "trble_4.htm#S-00600-00600"
descArray[arraycount] = "élimination des bourrages papier"
	
arraycount += 1
	
namesArray[arraycount] = "Dépannage"
urlsArray[arraycount] = "trble_3.htm#S-00600-00300"
descArray[arraycount] = "problèmes USB"
	
arraycount += 1
	
namesArray[arraycount] = "Désinstallation"
urlsArray[arraycount] = "soft_10.htm#S-00400-00800"
descArray[arraycount] = "logiciel d'impression"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-00500"
descArray[arraycount] = "Direction d'impression"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-02000"
descArray[arraycount] = "Durée d'arrêt"
	
arraycount += 1
	
namesArray[arraycount] = "Enveloppes"
urlsArray[arraycount] = "paper_3.htm#S-00300-00500-00300"
descArray[arraycount] = "impression"
	
arraycount += 1
	
namesArray[arraycount] = "Enveloppes"
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00500"
descArray[arraycount] = "spécifications"
	
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
descArray[arraycount] = "accès"
	
arraycount += 1
	
namesArray[arraycount] = "EPSON Status Monitor 3"
urlsArray[arraycount] = "soft_5.htm#S-00400-00500-00100"
descArray[arraycount] = "configuration"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "apspe_3.htm#S-00900-00300-00100"
descArray[arraycount] = "ESC/P"
	
arraycount += 1
	
namesArray[arraycount] = "Feuilles simples"
urlsArray[arraycount] = "paper_2.htm#S-00300-00400"
descArray[arraycount] = "impression"
	
arraycount += 1
	
namesArray[arraycount] = "Feuilles simples"
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00500"
descArray[arraycount] = "spécifications"
	
arraycount += 1
	
namesArray[arraycount] = "Formulaires à exemplaires multiples"
urlsArray[arraycount] = "paper_3.htm#S-00300-00500-00100"
descArray[arraycount] = "impression"
	
arraycount += 1
	
namesArray[arraycount] = "Formulaires à exemplaires multiples"
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00500"
descArray[arraycount] = "spécifications"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "apspe_3.htm#S-00900-00300-00300"
descArray[arraycount] = "IBM PPDS"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-00500"
descArray[arraycount] = "Impression bidirectionnelle (Bi-d)"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-00500"
descArray[arraycount] = "Impression unidirectionnelle (Uni-d)"
	
arraycount += 1
	
namesArray[arraycount] = "Imprimante"
urlsArray[arraycount] = "soft_8.htm#S-00400-00600-00100"
descArray[arraycount] = "partage"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "trble_1.htm#S-00600-00100"
descArray[arraycount] = "Indicateur d'erreur"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-00900"
descArray[arraycount] = "Interface USB"
	
arraycount += 1
	
namesArray[arraycount] = "Interface USB"
urlsArray[arraycount] = "trble_3.htm#S-00600-00300"
descArray[arraycount] = "problèmes"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00200"
descArray[arraycount] = "Jeux de caractères internationaux"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-02200"
descArray[arraycount] = "Jeux de caractères internationaux pour table de caractères Italique"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "paper_3.htm#S-00300-00500-00400"
descArray[arraycount] = "Levier d’épaisseur du papier"
	
arraycount += 1
	
namesArray[arraycount] = "Liste de commandes"
urlsArray[arraycount] = "apspe_3.htm#S-00900-00300-00100"
descArray[arraycount] = "ESC/P"
	
arraycount += 1
	
namesArray[arraycount] = "Liste de commandes"
urlsArray[arraycount] = "apspe_3.htm#S-00900-00300-00300"
descArray[arraycount] = "IBM PPDS"
	
arraycount += 1
	
namesArray[arraycount] = "Logiciel"
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-00700"
descArray[arraycount] = "réglage par défaut"
	
arraycount += 1
	
namesArray[arraycount] = "Logiciel d'impression"
urlsArray[arraycount] = "soft_10.htm#S-00400-00800"
descArray[arraycount] = "désinstallation"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-00100"
descArray[arraycount] = "Longueur de page pour tracteur"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-01700"
descArray[arraycount] = "Longueur des données"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-01100"
descArray[arraycount] = "Mode bidirectionnel I/F parallèle"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_2.htm#S-00500-00300"
descArray[arraycount] = "Mode de verrouillage"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-00900"
descArray[arraycount] = "Mode I/F (interface)"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-01200"
descArray[arraycount] = "Mode paquet"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00200"
descArray[arraycount] = "Mode Paramètres par défaut"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-01900"
descArray[arraycount] = "Mode sourdine"
	
arraycount += 1
	
namesArray[arraycount] = "Mode veille"
urlsArray[arraycount] = "cntrl_1.htm#S-00500-00100-00300"
descArray[arraycount] = "opérations du panneau"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "apspe_5.htm#S-00900-00500"
descArray[arraycount] = "Nettoyage de l'imprimante"
	
arraycount += 1
	
namesArray[arraycount] = "Options"
urlsArray[arraycount] = "optn_1.htm#S-00800-00100-00100"
descArray[arraycount] = "support de rouleau papier"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_1.htm#S-00500-00100"
descArray[arraycount] = "Panneau"
	
arraycount += 1
	
namesArray[arraycount] = "panneau de contrôle"
urlsArray[arraycount] = "cntrl_1.htm#S-00500-00100"
descArray[arraycount] = "voyants"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "trble_1.htm#S-00600-00100"
descArray[arraycount] = "Panneau de contrôle"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_1.htm#S-00500-00100"
descArray[arraycount] = "Panneau de contrôle"
	
arraycount += 1
	
namesArray[arraycount] = "Panneau de contrôle"
urlsArray[arraycount] = "cntrl_1.htm#S-00500-00100"
descArray[arraycount] = "panneau"
	
arraycount += 1
	
namesArray[arraycount] = "Panneau de contrôle"
urlsArray[arraycount] = "cntrl_1.htm#S-00500-00100"
descArray[arraycount] = "touches"
	
arraycount += 1
	
namesArray[arraycount] = "Papier continu"
urlsArray[arraycount] = "paper_1.htm#S-00300-00300"
descArray[arraycount] = "impression"
	
arraycount += 1
	
namesArray[arraycount] = "Papier continu"
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00500"
descArray[arraycount] = "spécifications"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "soft_6.htm#S-00400-00900"
descArray[arraycount] = "Paramètre bidirectionnel"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-02400"
descArray[arraycount] = "Paramètre Buzzer (beeper)"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "soft_7.htm#S-00400-01000"
descArray[arraycount] = "Paramètre imprimante"
	
arraycount += 1
	
namesArray[arraycount] = "Paramètres par défaut"
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100"
descArray[arraycount] = "liste des options"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-01600"
descArray[arraycount] = "Parité"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-01400"
descArray[arraycount] = "Pas"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "soft_2.htm#S-00400-00200"
descArray[arraycount] = "Pilote (pilote d'impression)"
	
arraycount += 1
	
namesArray[arraycount] = "Pilote d'impression"
urlsArray[arraycount] = "soft_3.htm#S-00400-00300"
descArray[arraycount] = "accès"
	
arraycount += 1
	
namesArray[arraycount] = "Pilote d'impression"
urlsArray[arraycount] = "soft_4.htm#S-00400-00400"
descArray[arraycount] = "paramètres"
	
arraycount += 1
	
namesArray[arraycount] = "Pilote d'impression"
urlsArray[arraycount] = "soft_3.htm#S-00400-00300-00300"
descArray[arraycount] = "paramètres"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-02200"
descArray[arraycount] = "Police"
	
arraycount += 1
	
namesArray[arraycount] = "Police intégrée"
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00200"
descArray[arraycount] = "liste"
	
arraycount += 1
	
namesArray[arraycount] = "Police intégrée"
urlsArray[arraycount] = "cntrl_1.htm#S-00500-00100-00200"
descArray[arraycount] = "sélection"
	
arraycount += 1
	
namesArray[arraycount] = "Réglage"
urlsArray[arraycount] = "paper_3.htm#S-00300-00500-00400"
descArray[arraycount] = "levier d’épaisseur du papier"
	
arraycount += 1
	
namesArray[arraycount] = "Réglage"
urlsArray[arraycount] = "paper_1.htm#S-00300-00300-00600"
descArray[arraycount] = "position de dégagement"
	
arraycount += 1
	
namesArray[arraycount] = "Réglage"
urlsArray[arraycount] = "paper_1.htm#S-00300-00300-00600-00300"
descArray[arraycount] = "position de dégagement"
	
arraycount += 1
	
namesArray[arraycount] = "Réglage"
urlsArray[arraycount] = "paper_1.htm#S-00300-00300-00500"
descArray[arraycount] = "position de haut de page"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "paper_1.htm#S-00300-00300-00600-00300"
descArray[arraycount] = "réglage fin"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "paper_1.htm#S-00300-00300-00600"
descArray[arraycount] = "Réglage fin"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "paper_1.htm#S-00300-00300-00500"
descArray[arraycount] = "Réglage fin"
	
arraycount += 1
	
namesArray[arraycount] = "Retrait"
urlsArray[arraycount] = "paper_1.htm#S-00300-00300-00200"
descArray[arraycount] = "document imprimé de"
	
arraycount += 1
	
namesArray[arraycount] = "Rouleau papier"
urlsArray[arraycount] = "optn_1.htm#S-00800-00100-00100"
descArray[arraycount] = "impression"
	
arraycount += 1
	
namesArray[arraycount] = "Rouleau papier"
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00500"
descArray[arraycount] = "spécifications"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-00400"
descArray[arraycount] = "Saut de ligne automatique"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-00200"
descArray[arraycount] = "Saut de perfortion tracteur"
	
arraycount += 1
	
namesArray[arraycount] = "Serveur"
urlsArray[arraycount] = "soft_8.htm#S-00400-00600-00200"
descArray[arraycount] = "sous Windows 7, Vista, XP ou 2000"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "custo_2.htm#S-00700-00200-00100"
descArray[arraycount] = "Service clientèle"
	
arraycount += 1
	
namesArray[arraycount] = "Spécifications"
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00700"
descArray[arraycount] = "alignement du papier"
	
arraycount += 1
	
namesArray[arraycount] = "Spécifications"
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00300"
descArray[arraycount] = "électriques"
	
arraycount += 1
	
namesArray[arraycount] = "Spécifications"
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00200"
descArray[arraycount] = "électroniques"
	
arraycount += 1
	
namesArray[arraycount] = "Spécifications"
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00400"
descArray[arraycount] = "environnementales"
	
arraycount += 1
	
namesArray[arraycount] = "Spécifications"
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00200"
descArray[arraycount] = "jeux de caractères internationaux"
	
arraycount += 1
	
namesArray[arraycount] = "Spécifications"
urlsArray[arraycount] = "apspe_3.htm#S-00900-00300-00300"
descArray[arraycount] = "listes de commandes"
	
arraycount += 1
	
namesArray[arraycount] = "Spécifications"
urlsArray[arraycount] = "apspe_3.htm#S-00900-00300-00100"
descArray[arraycount] = "listes de commandes"
	
arraycount += 1
	
namesArray[arraycount] = "Spécifications"
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00100"
descArray[arraycount] = "mécanique"
	
arraycount += 1
	
namesArray[arraycount] = "Spécifications"
urlsArray[arraycount] = "apspe_4.htm#S-00900-00400"
descArray[arraycount] = "normes et conformité"
	
arraycount += 1
	
namesArray[arraycount] = "Spécifications"
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00500"
descArray[arraycount] = "papier"
	
arraycount += 1
	
namesArray[arraycount] = "Spécifications"
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00200"
descArray[arraycount] = "police intégrée"
	
arraycount += 1
	
namesArray[arraycount] = "Spécifications"
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00200"
descArray[arraycount] = "table de caractères"
	
arraycount += 1
	
namesArray[arraycount] = "Spécifications"
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00600"
descArray[arraycount] = "zone imprimable recommandée"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00500"
descArray[arraycount] = "Spécifications relatives au papier"
	
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
urlsArray[arraycount] = "custo_2.htm#S-00700-00200-00100"
descArray[arraycount] = "Support technique"
	
arraycount += 1
	
namesArray[arraycount] = "Table de caractères IBM"
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-01800"
descArray[arraycount] = "paramètre par défaut"
	
arraycount += 1
	
namesArray[arraycount] = "Table de caractères table"
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-02100"
descArray[arraycount] = "paramètre"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-02300"
descArray[arraycount] = "Temporisation avant chargement manuel de la feuille"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-01000"
descArray[arraycount] = "Temps d'attente en partage d'interface"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_1.htm#S-00500-00100"
descArray[arraycount] = "Touches"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "apspe_6.htm#S-00900-00600"
descArray[arraycount] = "Transport de l'imprimante"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-01500"
descArray[arraycount] = "Vitesse de transfert"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_1.htm#S-00500-00100"
descArray[arraycount] = "voyants"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00600"
descArray[arraycount] = "Zone imprimable recommandée"
	

// ---- search target end -----

linksize = arraycount;



// ----end data -------

// final stuff
// the main program ---

jsi = new makeLinks(linksize);
document.write("<title>Résultats de la recherche</title><body bgcolor=white>");

	