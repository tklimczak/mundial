export interface Player {
  name: string;
  country_code: string;
  country: string;
  url: string;
}
export interface Hill {
  name: string;
  hs: number;
  country_code: string;
}
//https://pl.wikipedia.org/wiki/Puchar_%C5%9Awiata_w_skokach_narciarskich_2023/2024#Klasyfikacja_indywidualna
export const getPlayers = (): Player[] => {
  const players: Player[] = [
    { name: "Stefan Kraft", country_code: "AT", country: "Austria", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Stefan_Kraft_%28AUT%29_2019.jpg/622px-Stefan_Kraft_%28AUT%29_2019.jpg" },
    { name: "Ryōyū Kobayashi", country_code: "JP", country: "Japonia", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Ryoyu_Kobayashi_in_Wisla_%282018%29.jpg/360px-Ryoyu_Kobayashi_in_Wisla_%282018%29.jpg" },
    { name: "Andreas Wellinger", country_code: "DE", country: "Niemcy", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/20190226_Seefeld_SJ_4127.jpg/480px-20190226_Seefeld_SJ_4127.jpg" },
    { name: "Jan Hörl", country_code: "AT", country: "Austria", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/20190228_Seefeld_SJ_8551.jpg/480px-20190228_Seefeld_SJ_8551.jpg" },
    { name: "Peter Prevc", country_code: "SI", country: "Słowenia", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Peter_Prevc.png/480px-Peter_Prevc.png" },
    { name: "Michael Hayböck", country_code: "AT", country: "Austria", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/20190226_Seefeld_SJ_3938.jpg/480px-20190226_Seefeld_SJ_3938.jpg" },
    { name: "Johann André Forfang", country_code: "NO", country: "Norwegia", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/20190301_Seefeld_SJ_8592.jpg/480px-20190301_Seefeld_SJ_8592.jpg" },
    { name: "Marius Lindvik", country_code: "NO", country: "Norwegia", url: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Marius_Lindvik.jpg" },
    { name: "Lovro Kos", country_code: "SI", country: "Słowenia", url: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Lovro_Kos_-_Planici_2024_%28cropped%29.jpg" },
    { name: "Pius Paschke", country_code: "DE", country: "Niemcy", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/2017-10-01_COC_Klingenthal_Siegerehrung_Gesamt_COC_Sommer_Pius_Paschke.jpg/426px-2017-10-01_COC_Klingenthal_Siegerehrung_Gesamt_COC_Sommer_Pius_Paschke.jpg" },
    { name: "Daniel Tschofenig", country_code: "AT", country: "Austria", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/2023-09-23_TagDesSports_DanielTschofenig.jpg/448px-2023-09-23_TagDesSports_DanielTschofenig.jpg" },
    { name: "Manuel Fettner", country_code: "AT", country: "Austria", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Manuel-Fettner-Bergisel-2022.jpg/595px-Manuel-Fettner-Bergisel-2022.jpg" },
    { name: "Domen Prevc", country_code: "SI", country: "Słowenia", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/2017-09-30_COC_Klingenthal_Domen_Prevc.jpg/426px-2017-09-30_COC_Klingenthal_Domen_Prevc.jpg" },
    { name: "Anže Lanišek", country_code: "SI", country: "Słowenia", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/2017-10-03_FIS_SGP_2017_Klingenthal_Siegerehrung_An%C5%BEe_Lani%C5%A1ek_1.jpg/426px-2017-10-03_FIS_SGP_2017_Klingenthal_Siegerehrung_An%C5%BEe_Lani%C5%A1ek_1.jpg" },
    { name: "Daniel Huber", country_code: "AT", country: "Austria", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/20190228_Seefeld_SJ_8565.jpg/640px-20190228_Seefeld_SJ_8565.jpg" },
    { name: "Timi Zajc", country_code: "SI", country: "Słowenia", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/2017-10-01_COC_Klingenthal_Siegerehrung_Timi_Zajc.jpg/426px-2017-10-01_COC_Klingenthal_Siegerehrung_Timi_Zajc.jpg" },
    { name: "Karl Geiger", country_code: "DE", country: "Niemcy", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/20190226_Seefeld_SJ_4137.jpg/640px-20190226_Seefeld_SJ_4137.jpg" },
    { name: "Gregor Deschwanden", country_code: "CH", country: "Szwajcaria", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/20150927_FIS_Summer_Grand_Prix_Hinzenbach_4587.jpg/640px-20150927_FIS_Summer_Grand_Prix_Hinzenbach_4587.jpg" },
    { name: "Aleksander Zniszczoł", country_code: "PL", country: "Polska", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/2017-09-30_COC_Klingenthal_Aleksander_Zniszczo%C5%82_002.jpg/426px-2017-09-30_COC_Klingenthal_Aleksander_Zniszczo%C5%82_002.jpg" },
    { name: "Philipp Raimund", country_code: "DE", country: "Niemcy", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Philipp_Raimund_-_Bischofshofen_2023.jpg/479px-Philipp_Raimund_-_Bischofshofen_2023.jpg" },
    { name: "Kristoffer Eriksen Sundal", country_code: "NO", country: "Norwegia", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Kristoffer_Eriksen_Sundal.jpg/458px-Kristoffer_Eriksen_Sundal.jpg" },
    { name: "Ren Nikaidō", country_code: "JP", country: "Japonia", url: "" },
    { name: "Stephan Leyhe", country_code: "DE", country: "Niemcy", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/20190226_Seefeld_SJ_4131.jpg/640px-20190226_Seefeld_SJ_4131.jpg" },
    { name: "Halvor Egner Granerud", country_code: "NO", country: "Norwegia", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Halvor_Egner_Granerud.jpg/640px-Halvor_Egner_Granerud.jpg" },
    { name: "Piotr Żyła", country_code: "PL", country: "Polska", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/FIS_Sommer_Grand_Prix_2014_-_20140809_-_Piotr_Zyla_2.jpg/640px-FIS_Sommer_Grand_Prix_2014_-_20140809_-_Piotr_Zyla_2.jpg" },
    { name: "Kamil Stoch", country_code: "PL", country: "Polska", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Kamil_Stoch_%28POL%29_2019.jpg/602px-Kamil_Stoch_%28POL%29_2019.jpg" },
    { name: "Alex Insam", country_code: "IT", country: "Włochy", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/20190228_Seefeld_SJ_8527.jpg/640px-20190228_Seefeld_SJ_8527.jpg" },
    { name: "Dawid Kubacki", country_code: "PL", country: "Polska", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/2017-10-03_FIS_SGP_2017_Klingenthal_Siegerehrung_Dawid_Kubacki_Hymne.jpg/426px-2017-10-03_FIS_SGP_2017_Klingenthal_Siegerehrung_Dawid_Kubacki_Hymne.jpg" },
    { name: "Robert Johansson", country_code: "NO", country: "Norwegia", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/20190301_Seefeld_SJ_8596.jpg/640px-20190301_Seefeld_SJ_8596.jpg" },
    { name: "Niko Kytösaho", country_code: "FI", country: "Finlandia", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Niko_Kyt%C3%B6saho_-_Innsbruck_2020.jpg/451px-Niko_Kyt%C3%B6saho_-_Innsbruck_2020.jpg" },
    { name: "Giovanni Bresadola", country_code: "IT", country: "Włochy", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Giovanni_Bresadola.jpg/479px-Giovanni_Bresadola.jpg" },
    { name: "Clemens Aigner", country_code: "AT", country: "Austria", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/20161001_FIS_Sommer_Grand_Prix_Hinzenbach_5087.jpg/426px-20161001_FIS_Sommer_Grand_Prix_Hinzenbach_5087.jpg" },
    { name: "Roman Koudelka", country_code: "CZ", country: "Czechy", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/20190228_Seefeld_SJ_8558.jpg/640px-20190228_Seefeld_SJ_8558.jpg" },
    { name: "Junshirō Kobayashi", country_code: "JP", country: "Japonia", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/2017-10-03_FIS_SGP_2017_Klingenthal_Siegerehrung_Jenshiro_Kobayashi_1_%28cropped%29.jpg/478px-2017-10-03_FIS_SGP_2017_Klingenthal_Siegerehrung_Jenshiro_Kobayashi_1_%28cropped%29.jpg" },
    { name: "Erik Belshaw", country_code: "US", country: "Stany Zjednoczone", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/2020-01-22_Ski_Jumping_Competition_Round_Nordic_Mixed_Team_%282020_Winter_Youth_Olympics%29_by_Sandro_Halank%E2%80%93327.jpg/640px-2020-01-22_Ski_Jumping_Competition_Round_Nordic_Mixed_Team_%282020_Winter_Youth_Olympics%29_by_Sandro_Halank%E2%80%93327.jpg" },
    { name: "Benjamin Østvold", country_code: "NO", country: "Norwegia", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Benjamin_%C3%98stvold_-_Bad_Mitterndorf_2023.jpg/479px-Benjamin_%C3%98stvold_-_Bad_Mitterndorf_2023.jpg" },
    { name: "Władimir Zografski", country_code: "BG", country: "Bułgaria", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/20150927_FIS_Summer_Grand_Prix_Hinzenbach_4632.jpg/425px-20150927_FIS_Summer_Grand_Prix_Hinzenbach_4632.jpg" },
    { name: "Daniel-André Tande", country_code: "NO", country: "Norwegia", url: "https://upload.wikimedia.org/wikipedia/commons/0/01/Daniel-Andr%C3%A9_Tande.jpg" },
    { name: "Stephan Embacher", country_code: "AT", country: "Austria", url: "" },
    { name: "Antti Aalto", country_code: "FI", country: "Finlandia", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/20190226_Seefeld_SJ_3941.jpg/426px-20190226_Seefeld_SJ_3941.jpg" },
    { name: "Killian Peier", country_code: "CH", country: "Szwajcaria", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/20190226_Seefeld_SJ_4142.jpg/479px-20190226_Seefeld_SJ_4142.jpg" },
    { name: "Tate Frantz", country_code: "US", country: "Stany Zjednoczone", url: "" },
    { name: "Artti Aigro", country_code: "EE", country: "Estonia", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/2017-09-30_COC_Klingenthal_Artti_Aigro_002.jpg/640px-2017-09-30_COC_Klingenthal_Artti_Aigro_002.jpg" },
    { name: "Martin Hamann", country_code: "DE", country: "Niemcy", url: "" },
    { name: "Jewhen Marusiak", country_code: "UA", country: "Ukraina", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/2017-09-30_COC_Klingenthal_Yevhen_Marusiak.jpg/426px-2017-09-30_COC_Klingenthal_Yevhen_Marusiak.jpg" },
    { name: "Felix Hoffmann", country_code: "DE", country: "Niemcy", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/2017-09-30_COC_Klingenthal_Felix_Hoffmann_002.jpg/426px-2017-09-30_COC_Klingenthal_Felix_Hoffmann_002.jpg" },
    { name: "Sindre Ulven Jørgensen", country_code: "NO", country: "Norwegia", url: "" },
    { name: "Paweł Wąsek", country_code: "PL", country: "Polska", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/2017-09-30_COC_Klingenthal_Pawe%C5%82_W%C4%85sek.jpg/426px-2017-09-30_COC_Klingenthal_Pawe%C5%82_W%C4%85sek.jpg" },
    { name: "Constantin Schmid", country_code: "DE", country: "Niemcy", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Constantin_Schmid_-_Bad_Mitterndorf_2023_%282%29.jpg/479px-Constantin_Schmid_-_Bad_Mitterndorf_2023_%282%29.jpg" },
    { name: "Remo Imhof", country_code: "CH", country: "Szwajcaria", url: "" },
  ];
  return players;
};


export const getHills = (): Hill[] => {
  let hills: Hill[] = [];

  hills.push({ name: "Ruka", hs: 142, country_code: "FI" });
  hills.push({ name: "Lillehammer 98", hs: 98, country_code: "NO" });
  hills.push({ name: "Lillehammer 140", hs: 140, country_code: "NO" });
  hills.push({ name: "Klingenthal", hs: 140, country_code: "DE" });
  hills.push({ name: "Engelberg", hs: 140, country_code: "CH" });
  hills.push({ name: "Oberstdorf 137", hs: 137, country_code: "DE" });
  hills.push({ name: "Garmisch-Partenkirchen", hs: 142, country_code: "DE" });
  hills.push({ name: "Innsbruck", hs: 128, country_code: "AT" });
  hills.push({ name: "Bischofshofen", hs: 142, country_code: "AT" });
  hills.push({ name: "Wisła", hs: 134, country_code: "PL" });
  hills.push({ name: "Szczyrk", hs: 104, country_code: "PL" });
  hills.push({ name: "Zakopane", hs: 140, country_code: "PL" });
  hills.push({ name: "Willingen", hs: 147, country_code: "DE" });
  hills.push({ name: "Lake Placid", hs: 128, country_code: "US" });
  hills.push({ name: "Sapporo", hs: 137, country_code: "JP" });
  hills.push({ name: "Oberstdorf 235", hs: 235, country_code: "DE" });
  hills.push({ name: "Lahti", hs: 130, country_code: "FI" });
  hills.push({ name: "Oslo", hs: 134, country_code: "NO" });
  hills.push({ name: "Trondheim 105", hs: 105, country_code: "NO" });
  hills.push({ name: "Trondheim 138", hs: 138, country_code: "NO" });
  hills.push({ name: "Vikersund", hs: 240, country_code: "NO" });
  hills.push({ name: "Planica", hs: 240, country_code: "SI" });
  hills.push({ name: "Kulm", hs: 235, country_code: "AT" });

  return hills;
};

export const getScores = (): number[] => {
  return [100,80,60,50,45,40, 36,32,29,26,24,22,20,18,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1];
};


export function getRandomElement<T>(array: T[]): T | undefined {
  if (array.length === 0) return undefined; // Handle empty array case
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

