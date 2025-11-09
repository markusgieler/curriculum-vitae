async function loadData() {
  try {
    const response = await fetch("assets/json/config.json");
    if (!response.ok) {
      throw new Error(`Erro HTTP: ${response.status}`);
    }

    const data = await response.json();
    //console.log("📦 JSON carregado com sucesso:", data);

    document.getElementById("pagTitle").textContent = data.pagTitle;
    document.getElementById("namTitle").textContent = data.namTitle;

    /*Sobre*/
    document.getElementById("sobTitle").textContent = data.sobTitle;
    document.getElementById("sobContent").textContent = data.sobContent;

    /*Educação*/
    document.getElementById("eduTitle").textContent = data.eduTitle;
    document.getElementById("eduSubtitle6").textContent = data.eduSubtitle6;
    document.getElementById("eduLocation6").textContent = data.eduLocation6;
    document.getElementById("eduPeriod6").textContent = data.eduPeriod6;
    document.getElementById("eduSubtitle5").textContent = data.eduSubtitle5;
    document.getElementById("eduLocation5").textContent = data.eduLocation5;
    document.getElementById("eduPeriod5").textContent = data.eduPeriod5;
    document.getElementById("eduSubtitle4").textContent = data.eduSubtitle4;
    document.getElementById("eduLocation4").textContent = data.eduLocation4;
    document.getElementById("eduPeriod4").textContent = data.eduPeriod4;
    document.getElementById("eduSubtitle3").textContent = data.eduSubtitle3;
    document.getElementById("eduLocation3").textContent = data.eduLocation3;
    document.getElementById("eduPeriod3").textContent = data.eduPeriod3;
    document.getElementById("eduSubtitle2").textContent = data.eduSubtitle2;
    document.getElementById("eduLocation2").textContent = data.eduLocation2;
    document.getElementById("eduPeriod2").textContent = data.eduPeriod2;
    document.getElementById("eduSubtitle1").textContent = data.eduSubtitle1;
    document.getElementById("eduLocation1").textContent = data.eduLocation1;
    document.getElementById("eduPeriod1").textContent = data.eduPeriod1;

    /*Experiência Profissional*/
    document.getElementById("expTitle").textContent = data.expTitle;
    document.getElementById("expSubtitle5").textContent = data.expSubtitle5;
    document.getElementById("expPeriod5").textContent = data.expPeriod5;
    document.getElementById("expContent5").textContent = data.expContent5;
    document.getElementById("expSubtitle4").textContent = data.expSubtitle4;
    document.getElementById("expPeriod4").textContent = data.expPeriod4;
    document.getElementById("expContent4").textContent = data.expContent4;
    document.getElementById("expSubtitle3").textContent = data.expSubtitle3;
    document.getElementById("expPeriod3").textContent = data.expPeriod3;
    document.getElementById("expContent3").textContent = data.expContent3;
    document.getElementById("expSubtitle2").textContent = data.expSubtitle2;
    document.getElementById("expPeriod2").textContent = data.expPeriod2;
    document.getElementById("expContent2").textContent = data.expContent2;
    document.getElementById("expSubtitle1").textContent = data.expSubtitle1;
    document.getElementById("expPeriod1").textContent = data.expPeriod1;
    document.getElementById("expContent1").textContent = data.expContent1;    

    /*Conhecimentos Técnicos*/
    document.getElementById("conTitle").textContent = data.conTitle;
    document.getElementById("conSubtitle11").textContent = data.conSubtitle11;
    document.getElementById("conContent11").textContent = data.conContent11;
    document.getElementById("conSubtitle10").textContent = data.conSubtitle10;
    document.getElementById("conContent10").textContent = data.conContent10;
    document.getElementById("conSubtitle09").textContent = data.conSubtitle09;
    document.getElementById("conContent09").textContent = data.conContent09;
    document.getElementById("conSubtitle08").textContent = data.conSubtitle08;
    document.getElementById("conContent08").textContent = data.conContent08;
    document.getElementById("conSubtitle07").textContent = data.conSubtitle07;
    document.getElementById("conContent07").textContent = data.conContent07;
    document.getElementById("conSubtitle06").textContent = data.conSubtitle06;
    document.getElementById("conContent06").textContent = data.conContent06;
    document.getElementById("conSubtitle05").textContent = data.conSubtitle05;
    document.getElementById("conContent05").textContent = data.conContent05;
    document.getElementById("conSubtitle04").textContent = data.conSubtitle04;
    document.getElementById("conContent04").textContent = data.conContent04;
    document.getElementById("conSubtitle03").textContent = data.conSubtitle03;
    document.getElementById("conContent03").textContent = data.conContent03;
    document.getElementById("conSubtitle02").textContent = data.conSubtitle02;
    document.getElementById("conContent02").textContent = data.conContent02;
    document.getElementById("conSubtitle01").textContent = data.conSubtitle01;
    document.getElementById("conContent01").textContent = data.conContent01;

    /*Idiomas*/
    document.getElementById("idiTitle").textContent = data.idiTitle;
    document.getElementById("idiLanguage3").textContent = data.idiLanguage3;
    document.getElementById("idiLevel3").textContent = data.idiLevel3;
    document.getElementById("idiLanguage2").textContent = data.idiLanguage2;
    document.getElementById("idiLevel2").textContent = data.idiLevel2;
    document.getElementById("idiLanguage1").textContent = data.idiLanguage1;
    document.getElementById("idiLevel1").textContent = data.idiLevel1; 

    document.getElementById("proTitle").textContent = data.proTitle;
    document.getElementById("proSubtitle1").textContent = data.proSubtitle1;            
  } catch (error) {
    //console.error("❌ Erro ao carregar o JSON:", error);
  }
}

loadData();