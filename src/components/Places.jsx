import React from "react";
import PlacesImg from "../../public/images/places.jpeg";
const templesData = [
  {
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0aajbECEsUHBv6-OySS-FWSq971BGlqvOxw&usqp=CAU",
    title: "श्री हनुमान गढ़ी अयोध्या जी",
    description:
      "हनुमानगढ़ी भगवान राम के परम भक्त श्री हनुमान का मंदिर है, राम जी ने जब हनुमान जी को ये मंदिर दिया था तब उन्होंने कहा था कि जब भी काई भक्‍त अयोध्‍या आएंगे तब वो सबसे पहले हनुमान जी के दर्शन करेंगे. इस बात का वर्णन हमारे अथर्ववेद में है.",
  },
  {
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvyWKyhl1ZBk8tKcRRN06a4llasR2OwvosaA&usqp=CAU",
    title: "श्री नागेश्वर नाथ मंदिर",
    description:
      "नागेश्वर नाथ मंदिर जिसकी स्थापना भगवान राम के पुत्र कुश ने की थी. यहां सरयू तट के किनारे नागेश्वर नाथ मंदिर है. यहां भगवान शंकर की विधि-विधान से पूजा-अर्चना की जाती है. महाशिवरात्रि के दिन नागेश्वर नाथ मंदिर पर लाखों की संख्या में श्रद्धालु शिवलिंग पर जलाभिषेक करते हैं.",
  },
  {
    imageSrc: "https://new-img.patrika.com/upload/2018/01/05/ayodhya.jpg",
    title: "श्री चन्द्रहरि मंदिर",
    description:
      " अयोध्या में भगवान श्री राम की जन्मस्थली के साथ कई देवों के द्वारा स्थापित पवित्र स्थल है। सरयू घाट के किनारे स्थित एक ऐसा अद्भुद मंदिर जहां पर दर्शन मात्र से बारह ज्योतिर्लिंगों के दर्शन का पुण्य प्राप्त होता है।",
  },
  {
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaLIml8mUNjWHmk1pREcVASXfgGqVtwuAqhw&usqp=CAU",
    title: "श्री कनक भवन",
    description:
      "कभी द्वापर युग में भगवान कृष्ण भी राम की पूजा करने अयोध्या आए थे तो यहां एक टीले पर मां पद्मासना को तपस्या करते देख वहां विशाल कनक भवन मंदिर का निर्माण कराया था।",
  },
  {
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB6KPKaFFb6A2a1qJ3pqxKAdXXt4r_HlPyWw&usqp=CAU",
    title: "श्री देवकाली मंदिर",
    description:
      "मान्यता है कि मां देवकाली के दरबार से कोई भी खाली हाथ नहीं जाता। भगवान राम की आराध्य देवी बड़ी देवकाली अपने भक्तों की हर मुरादें पूरी करती हैं। श्रीराम की कुलदेवी होने का गौरव प्राप्त है। वैसे तो यहां साल भर श्रद्धालु आते हैं, लेकिन नवरात्र का अपना विशेष महत्व है।",
  },
  {
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYYPUxByZ79KlcznGGOEpw9daSviBN2pw-yw&usqp=CAU",
    title: "श्री मतगजेंद्र",
    description:
      "यहाँ पर लंकापति रावण के भाई और रामभक्त विभीषण के पुत्र बाबा मत्गजेंद्र की पूजा अर्चना होती है। बाबा मत्गजेंद्र जिन्हें अयोध्या के कोतवाल के रूप में जाना जाता है और उनकी पूजा आराधना होती है।",
  },
  {
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCLqfg6Zr22SWawmcnVQBI5G_vPXuTMT-kvQ&usqp=CAU",
    title: "श्री सूर्य कुंड मंदिर",
    description:
      "सूर्य कुंड वह जगह है जब भगवान राम अयोध्या में जन्मे थे, तो भगवान सूर्य इसी जगह पर आए थे. भगवान सूर्य ने भगवान राम की बाल लीलाओं के दर्शन किए थे. इतना ही नहीं धार्मिक मान्यता यह भी है कि अगर किसी को कुष्ठ रोग है और वह इस कुंड में स्नान करता है, तो उसके सारे रोग समाप्त हो जाते हैं.",
  },
  {
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMPtGQn8MTexA3nOMWlMYjCx30MO12FnVCgw&usqp=CAU",
    title: "श्री सीताकूप तीर्थ",
    description:
      "मंदिर के पास एक ऐतिहासिक कुआँ (सीता कूप) है, जो प्राचीन काल का है।  सीता कूप उस स्थान को कहा जाता है जहां रानियों ने अपने निवास स्थान को छोड़कर जल राशि में गिरकर समाप्त हो गईं। सीता कूप नाम से इसे पुकारा जाता है क्योंकि सीता जी भी इसी समय यहाँ गिरी थीं।",
  },
];

const Places = () => (
  <>
    <section className="py-20 relative">
      <img
        src={PlacesImg}
        className="absolute top-0 left-0 h-full w-full opacity-40 z-[-1]"
      />
      <h1 className="font-bold  text-5xl m-4 p-6 text-orange-500 text-center">
        Places to Visit
      </h1>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-x-6 gap-y-16 px-8 md:px-16">
        {templesData.map((temple) => {
          const { imageSrc, title, description } = temple;
          return (
            <div className="relative group">
              <div className="border-2 border-orange-500 border-opacity-20 shadow-xl bg-white group-hover:scale-110 transition duration-500">
                <img className="h-48 w-full object-cover" src={imageSrc} />
                <h1 className="font-bold text-2xl text-center py-4">{title}</h1>
              </div>
              <div className=" group-hover:opacity-100 group-hover:z-[2] transition-all duration-[500ms] group-hover:scale-110 opacity-0 absolute top-0 left-0 h-full w-full bg-orange-500 bg-opacity-95 border-2 border-black z-[-1] p-6 font-semibold text-lg text-white">
                {description}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  </>
);

export default Places;
