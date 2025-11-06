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

    document.getElementById("conTitle").textContent = data.conTitle;

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