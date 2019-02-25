
	  /*rezervacije*/
	  function provera()
{
	var ime = document.getElementById('tbIme');
	var prezime = document.getElementById('tbPrezime');
	var broj_ljudi = document.getElementById('tbBr');
	
	var status = document.getElementsByName('rbDan');
	
	
	var regIme = /^[A-Z]{1}[a-z]{2,19}$/;
	var regPrezime = /^[A-Z]{1}[a-z]{4,39}$/;
	var regBLJ = /^[1-9]{1}([0-5]{1})?$/;/*NIJE DOBRO BROJ LJUDI OD 2-9*/
	
	
	var podaci = new Array();
	var greske = new Array();
	var greskeID = new Array();
	
	if(!ime.value.match(regIme))
	{
		greske.push("Ime nije u dobrom formatu!");
		greskeID.push(ime.id);
	}
	else
	{
		podaci.push(ime.value);
	}
	
	if(!prezime.value.match(regPrezime))
	{
		greske.push("Prezime nije u dobrom formatu!");
		greskeID.push(prezime.id);
	}
	else
	{
		podaci.push(prezime.value);
	}
	
	
	
	if(!broj_ljudi.value.match(regBLJ))
	{
		greske.push("minimum 2 coveka maksimum 9");
		greskeID.push(broj_ljudi.id);
	}
	else
	{
		podaci.push(broj_ljudi.value);
	}
	
	var statusIzbor = "";
	
	for(var i = 0; i < status.length; i++)
	{
		if(status[i].checked)
		{
			statusIzbor = status[i].value;
			break;
		}
	}
	
	
	if(statusIzbor == "")
	{
		greske.push("Izaberite dan!");
	}
	else
	{
		podaci.push(statusIzbor);
	}
	

	var divIspis = document.getElementById('ispis');
	
	var tekst = "<ul>";
	
	if(greske.length != 0)
	{
		for(var i = 0; i < greske.length; i++)
		{
			tekst += "<li>" + greske[i] + "</li>";
		}
		tekst += "</ul>";
		
		divIspis.innerHTML = tekst;
		
		for(var i = 0; i < greskeID.length; i++)
		{
			document.getElementById(greskeID[i]).style.border = "3px solid #FF0000";
		}
	}
	else
	{
		for(var i = 0; i < podaci.length; i++)
		{
			tekst += "<li>" + podaci[i] + "</li>";
		}
		tekst += "</ul>";
		
		divIspis.innerHTML = tekst;
	}
	}
	
	
	
	
	
	
	
	/*kontakt*/
	 function kontaktProvera()
{
	var ime = document.getElementById('tbIme');
	var prezime = document.getElementById('tbPrezime');
	var mail = document.getElementById('tbMail');
	var poruka=document.getElementById('taPoruka');
	
	var regIme = /^[A-Z]{1}[a-z]{2,19}$/;
	var regPrezime = /^[A-Z]{1}[a-z]{4,39}$/;
	var regMail = /^[a-z \d]+((\.|\_|\-)?[\w \d]+)?@\w+\.(\w+\.)?\w{2,3}$/;
	var regPoruka=/^[A-Z]{1}\w+(\s?(\w|\d)+(\.|\?|\!)?)*$/;
	
	
	var podaci = new Array();
	var greske = new Array();
	var greskeID = new Array();
	
	if(!ime.value.match(regIme))
	{
		greske.push("Ime nije u dobrom formatu!");
		greskeID.push(ime.id);
	}
	else
	{
		podaci.push(ime.value);
	}
	
	if(!prezime.value.match(regPrezime))
	{
		greske.push("Prezime nije u dobrom formatu!");
		greskeID.push(prezime.id);
	}
	else
	{
		podaci.push(prezime.value);
	}
	
	
	
	if(!mail.value.match(regMail))
	{
		greske.push("Mail nije u dobrom formatu!");
		greskeID.push(mail.id);
	}
	else
	{
		podaci.push(mail.value);
	}
	if(!poruka.value.match(regPoruka))
	{
		greske.push("Poruka nije u dobrom formatu!");
		greskeID.push(poruka.id);
	}
	else
	{
		podaci.push(poruka.value);
	}
	
	
	var divIspis = document.getElementById('ispis');
	
	var tekst = "<ul>";
	
	if(greske.length != 0)
	{
		for(var i = 0; i < greske.length; i++)
		{
			tekst += "<li>" + greske[i] + "</li>";
		}
		tekst += "</ul>";
		
		divIspis.innerHTML = tekst;
		
		for(var i = 0; i < greskeID.length; i++)
		{
			document.getElementById(greskeID[i]).style.border = "1px solid #FF0000";
		}
	}
	else
	{
		for(var i = 0; i < podaci.length; i++)
		{
			tekst += "<li>" + podaci[i] + "</li>";
		}
		tekst += "</ul>";
		
		divIspis.innerHTML = tekst;
	}
	
	
	
}
	
	
	/*organizator i hostesa*/
	
	
	function proveraOrg()
{
	var ime = document.getElementById('tbIme');
	var prezime = document.getElementById('tbPrezime');
	var kontakt = document.getElementById('tbK');
	var radnoI=document.getElementById('taRadnoIskustvo');
	
	var regIme = /^[A-Z]{1}[a-z]{2,19}$/;
	var regPrezime = /^[A-Z]{1}[a-z]{2,39}$/;
	var regKontakt = /^([0]{1})([6]{1})([0-6]{1})([0-9]{6,7})$/;
	var regRadnoI=   /^[A-Z]{1}\w+(\s?(\w|\d)+(\.|\?|\!)?)*$/;
	
	
	var podaci = new Array();
	var greske = new Array();
	var greskeID = new Array();
	
	if(!ime.value.match(regIme))
	{
		greske.push("Ime nije u dobrom formatu!");
		greskeID.push(ime.id);
	}
	else
	{
		podaci.push(ime.value);
	}
	
	if(!prezime.value.match(regPrezime))
	{
		greske.push("Prezime nije u dobrom formatu!");
		greskeID.push(prezime.id);
	}
	else
	{
		podaci.push(prezime.value);
	}
	
	
	
	if(!kontakt.value.match(regKontakt))
	{
		greske.push("Kontakt telefon nije u dobrom formatu!");
		greskeID.push(kontakt.id);
	}
	else
	{
		podaci.push(kontakt.value);
	}
	if(!radnoI.value.match(regRadnoI))
	{
		greske.push("Radno iskustvo nije u dobrom formatu!");
		greskeID.push(radnoI.id);
	}
	else
	{
		podaci.push(radnoI.value);
	}
	
	
	var divIspis = document.getElementById('ispis');
	
	var tekst = "<ul>";
	
	if(greske.length != 0)
	{
		for(var i = 0; i < greske.length; i++)
		{
			tekst += "<li>" + greske[i] + "</li>";
		}
		tekst += "</ul>";
		
		divIspis.innerHTML = tekst;
		
		for(var i = 0; i < greskeID.length; i++)
		{
			document.getElementById(greskeID[i]).style.border = "1px solid #FF0000";
		}
	}
	else
	{
		for(var i = 0; i < podaci.length; i++)
		{
			tekst += "<li>" + podaci[i] + "</li>";
		}
		tekst += "</ul>";
		
		divIspis.innerHTML = tekst;
	}
	
	
	
}
	
	
	/*pretraga*/
	
	
	function pretrazi()
{
if(window.XMLHttpRequest) xmlhttp=new XMLHttpRequest();
else xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
xmlhttp.open("GET","pretraga.xml",false);
xmlhttp.send();
xmlDoc=xmlhttp.responseXML;
dohvati(xmlDoc);
}

	
	
	
	
	
	
	


	  