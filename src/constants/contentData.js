import { generateKey } from '../services/helpers'

export default [
  {
    key: generateKey( 'section1' ),
    title: {
      en: 'From The Author',
      am: 'Հեղինակից',
    },
    blocks: [
      {
        key: generateKey( 'blocks2' ),
        leftSide: {
          components: [
            {
              type: 'image',
              onlyMobile: true,
              content: {
                key: generateKey( 'image1218' ),
                src: '06',
                className: 'mb-12',
                disableLazy: true,
                alt: 'Car',
              },
            },
            {
              key: generateKey( 'components3' ),
              type: 'text',
              scrollable: false,
              content: {
                textHTML: {
                  am: '<p>Այս ամառ մեր սովետական Vaz2106-ով հորս հետ ճամփորդեցինք 7000 կմ, եղանք Հայաստանի բոլոր 10 մարզերում, խոսեցինք 100 մեղվապահի հետ:</p><br /><p>' +
                    'Նպատակն էր պարզել, թե արդյոք վերջին տարիներին Հայաստանում մեղվաընտանիքների քանակը նվազում է և որոնք են մեղուների անկման վրա ազդող գործոնները: </p><br /><p>' +
                    'Բոլորս գիտենք, թե ինչ կարևոր ու անփոխարինելի դեր ունեն մեղուները էկոհամակարգերում, գյուղատնտեսությունում ու, ընդհանրապես, մարդու կենսագործունեության մեջ։ Այդ մասին ավելի մանրամասն պատմել եմ նախորդ հրապարկման մեջ։ </p><br /><p>' +
                    'Այս հրապարակմամբ միանգամից կներկայացնեմ Հայաստանի բոլոր մարզերից 100 մեղվապահի շրջանում անցկացրած հարցման և հետազոտության արդյունքները:</p>',
                  en: '<p>This summer me and my dad traveled 7000km in our soviet Vaz2106 car. We visited all 10 regions of Armenia and talked to 100 beekeepers.</p><br /><p>' +
                    'I was aiming to find out if there’s a decrease in the number of honey bee colonies in Armenia and what are the causes for the decline.</p><br /><p>' +
                    'We all know what a vital and irreplaceable role bees play in ecosystems, agriculture, and human livelihoods in general. I talked about this in more detail in the previous publication.</p><br /><p>' +
                    'With this publication, I will present the results of a research and survey conducted among 100 beekeepers from all regions of Armenia</p>',
                },
              },
            },
          ],
        },
        rightSide: {
          components: [
            {
              type: 'image',
              onlyMobile: true,
              content: {
                key: generateKey( 'image415' ),
                src: 'Asatur',
                alt: 'Asatur from Ujan',
                disableLazy: true,
                description: {
                  en: 'Asatur from Ujan (Aragatsotn), honey seller on the road to Aparan have lost 20 hives in 2021.',
                  am: 'Ապարանի ճանապարհին մեղր վաճառող Ուջանցի (Արագածոտն) Ասատուրը 2021 թվականին կորցրել է 20 փեթակ։',
                },
              },
            },
            {
              type: 'images',
              scrollable: true,
              onlyWeb: true,
              height: '300px',
              content: [
                {
                  key: generateKey( 'image4' ),
                  src: '06',
                  className: 'xm:mb-20 lg:mb-44',
                  disableLazy: true,
                  alt: 'Car',
                },
                {
                  key: generateKey( 'image5' ),
                  src: 'Asatur',
                  alt: 'Asatur from Ujan',
                  disableLazy: true,
                  description: {
                    en: 'Asatur from Ujan (Aragatsotn), honey seller on the road to Aparan have lost 20 hives in 2021.',
                    am: 'Ապարանի ճանապարհին մեղր վաճառող Ուջանցի (Արագածոտն) Ասատուրը 2021 թվականին կորցրել է 20 փեթակ։',
                  },
                },
              ],
            },
          ],
        },
      },
      {
        key: generateKey( 'blocks6' ),
        leftSide: {
          marginAuto: true,
          components: [
            {
              key: generateKey( 'components7' ),
              type: 'text',
              scrollable: true,
              content: {
                textHTML: {
                  am: '<p>Վերջին հինգ տարիներին մեղվաընտանիքների նվազման միտում կա։ Հարցված 100 մեղվապահից 69-ը նշել են, որ նշված ժամանակահատվածում փեթակներ են կորցրել։ Կորուստներ են եղել հատկապես Արարատի, Շիրակի, Գեղարքունիքի, մասամբ նաև Արմավիրի և Լոռու մարզերում։ </p><br /><p>' +
                    'Բացի նվազող քանակից, մեղվապահներից շատերը նշում են նաև, որ ընկել են միջատների որակական հատկանիշները՝ դառնալով ավելի պասիվ և քիչ բերքատու։</p>',
                  en: '<p>There is a declining tendency of the number of bee colonies in the last five years. 69 out of 100 surveyed beekeepers said that they had lost hives during the mentioned period. There were losses especially in Ararat, Shirak, Gegharkunik, partly in Armavir and Lori regions.</p><br /><p>' +
                    'In addition to the declining numbers, many beekeepers notice that the quality of insects has also declined, becoming more passive and less productive.</p>',
                },
              },
            },
          ],
        },
        rightSide: {
          components: [
            {
              type: 'chart',
              scrollable: true,
              content: {
                key: generateKey( 'chart8' ),
                src: 'Chart1',
                styles: {
                  marginTop: 0,
                  marginBottom: 0,
                },
                disableLazy: true,
                alt: 'Honey bee colonies in the last five years',
                titleHTML: {
                  am: '<p>Վերջին հինգ տարիներին մեղվապահները նկատել են <span>մեղվաընտանիքների նվազում</span></p>',
                  en: '<p>Beekeepers have <span>noticed a decline</span> of honey bee colonies in the last five years.</p>',
                },
              },
            },
          ],
        },
      },
    ],
  },
  {
    key: generateKey( 'section9' ),
    title: {
      en: 'Decline causes',
      am: 'Անկման պատճառներ',
    },
    blocks: [
      {
        key: generateKey( 'blocks11' ),
        leftSide: {
          marginAuto: true,
          components: [
            {
              key: generateKey( 'components12' ),
              type: 'text',
              scrollable: true,
              content: {
                textHTML: {
                  am: '<p>Միջազգային գիտական աշխատություններում առանձնացնում են մեղվաընտանիքների անկումների մի քանի հիմնական պատճառ․ մեղուների շրջանում տարածված հիվանդություններ, այգեգործության մեջ օգտագործվող թունաքիմիկատներ, կլիմայի փոփոխություն և այլն։</p>',
                  en: '<p>International scientific papers single out several main reasons for the decline of honey bee colonies: common diseases among bees, pesticides used in horticulture, climate change, etc</p>',
                },
              },
            },
          ],
        },
        rightSide: {
          components: [
            {
              type: 'chart',
              scrollable: true,
              content: {
                key: generateKey( 'chart13' ),
                src: {
                  am: 'Chart2',
                  en: 'Chart2_en',
                },
                styles: {
                  marginTop: 0,
                  marginBottom: 0,
                },
                alt: 'Severe weather and diseases',
                titleHTML: {
                  am: '<p><b><span>Վատ եղանակային պայմաններն</span> ու <span>հիվանդությունները</span> որպես մեղվապահների առաջին խոչընդոտ</b></p>',
                  en: '<p><b><span>Severe weather</span> and <span>diseases</span> are the main obstacles for beekeepers.</b></p>',
                },
              },
            },
          ],
        },
      },
    ],
  },
  {
    key: generateKey( 'section14' ),
    title: {
      en: 'Diseases',
      am: 'Հիվանդություններ',
    },
    blocks: [
      {
        key: generateKey( 'blocks15' ),
        leftSide: {
          components: [
            {
              key: generateKey( 'components16' ),
              type: 'text',
              scrollable: false,
              content: {
                textHTML: {
                  am: '<p>Հայաստանում մեղուների շրջանում տարածված է վարրոատոզ հիվանդությունը, որի  հարուցիչ վարրոա տիզը մեղուների ու մեղվապահների մշտական անցանկալի հյուրն է։ Այն տարածված է ամբողջ աշխարհում (բացի Ավստրալիայից), ու դեռ որևէ երկիր չի կարողացել ազատվել վարրոա տզից։ Մեղվաընտանիքն այս հիվանդությունից փրկելու հիմնական տարբերակը պարբերաբար բուժելն է։ </p><br /><p>' +
                    'Բացի վարրոատոզից, ուսումնասիրությանը մասնակցած մեղվապահներն առանձնացրել են նաև այլ հիվանդություններ։ Մասնավորապես, նրանցից 18-ի  մեղվաընտանիքներում հայտնաբերվել է փտախտ, 6-ի մոտ` փորլուծություն, 7-ի` սնկային և 5-ի մոտ էլ այլ հիվանդություններ: </p><br /><p>' +
                    'Մեղվապահական դեղամիջոցների, այսինքն, մեղուների համար նախատեսված դեղանյութերի հանդեպ վստահությունը Հայաստանի մեղվապահների շրջանում մեծ չէ։ Նրանցից 26-ը վստահորեն նշում են, որ կրած կորուստների պատճառը հենց տեղի շուկայում վաճառվող դեղամիջոցներն են, ինչը շատերին ստիպում է դրանք ներկրել Ռուսաստանից։ </p><br /><p></p>',
                  en: '<p>Varroosis is a common disease among bees in Armenia caused by varroa destructor mite which is the constant unwanted guest of bees and beekeepers. It is spread all over the world (except Australia) and no country has been able to get rid of Varroa destructors. The main way to save the bee family from this disease is to treat it regularly.</p><br /><p>' +
                    'The beekeepers who participated in the survey identified other diseases as well. In particular, foulbrood was found in 18 beekeepers’ hives, diarrhea in 6, fungus in 7 and other diseases in 5.</p><br /><p>' +
                    'The beekeepers of Armenia have a low level of trust in beekeeping treatment products, that is apicultural treatments. 26 of them confidently state that the reason for the losses is the products sold in the local market. It forces many beekeepers to import these products from Russia.</p>',
                },
              },
            },
          ],
        },
        rightSide: {
          components: [
            {
              type: 'video',
              scrollable: false,
              content: {
                key: generateKey( 'video21' ),
                type: 'soundcloud',
                src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1144904554&color=%23ff5500&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true',
                description: {
                  en: 'Alexan Eghiazaryan who implements innovative approaches in beekeeping recommends using only licensed treatment products (Aghavnadzor, Kotayk)',
                  am: 'Նորարարական մոտեցումներ կիրառող մեղվաբույծ Ալեքսան Եղիազարյանը խորհուրդ է տալիս օգտագործել միայն լիցենզավորված դեղամիջոցներ (Աղավնաձոր, Կոտայք)',
                },
              },
            },
          ],
        },
      },
    ],
  },
  {
    key: generateKey( 'section22' ),
    title: {
      en: 'Bee-eater birds',
      am: 'Մեղվակերներ',
    },
    blocks: [
      {
        key: generateKey( 'blocks23' ),
        leftSide: {
          components: [
            {
              key: generateKey( 'components24' ),
              type: 'text',
              scrollable: false,
              content: {
                textHTML: {
                  am: '<p>Հարցման արդյունքների համաձայն՝ փեթակների քանակի վրա ազդող պատճառներից մյուսը գիշատիչների հարձակումներն են. մեղվակեր թռչուններ, կրետներ, ցեցեր ու բզեզներ, երբեմն էլ արջեր։ </p><br /><p>' +
                    'Եվրոպական մեղվակերը, որին անվանում են նաև «կլիմայի փոփոխության սուրհանդակ», մեկ տարում ուտում է շուրջ 1333.39 ± 759.8 մեղու․ դրա սննդակարգի մոտ 42%-ը մեղրատու մեղուներն են։ </p><br /><p>' +
                    'Եթե մեղվապահ եք և հատկապես ամպամած եղանակին կամ անձրևից հետո այդ սիրուն ու գունավոր թռչունները մոտենում են փեթակներին ու, ինչպես հենց դուք եք ասում, «չրթում մեղուներին», ապա հաշվի առեք, որ կա գիտականորեն ապացուցված մեթոդ, որն ինչ-որ չափով օգնում է մեղվակերների դեմ պայքարում։ </p><br /><p>' +
                    'Հայաստանում երբեմն մեղուների բզզոցից բացի փեթակներից գալիս են նաև վայրի թռչունների ձայներ․ դրանք միացնում են մեղվապահները՝ մեղվակերներին «քշելու» համար։ Մեղվակերների դեմ պայքարում են նաև փայտե սյուների վրա էլեկտրական հոսանքալարեր կապելով, սակայն, ըստ գիտափորձի, դրանք համարյա թե անօգուտ են։ Գիշատիչ թռչուններից պաշտպանվելու ամենաարդյունավետ եղանակը փեթակները  ցանկապատելն է, տանիք կապելն ու ներսում ջուր դնելը։ Այսպիսով, մեղուները ջուր խմելու համար շատ չեն հեռանա փեթակից, իսկ մեղվակերը չի կարողանա մոտենալ արկանոցներին։ </p><br /><p>' +
                    'Որոշ մեղվապահներ զենքով սպանում են թռչուններին, սակայն մեղվակերներից կանաչը գրանցված է ՀՀ Կարմիր գրքում, որին վնասելն <a target="_blank" href="https://mediafactory.am/buzz_of_bees/">արգելվում է</a>։</p>',
                  en: '<p>According to the results of the survey, another reason affecting the number of beehives is the attacks of predators: bee-eaters, wasps, moths and beetles, and sometimes bears.</p><br /><p>' +
                    'The European bee-eater bird, the so-called "messenger of climate change", eats about 1333.39 ± 759.8 bees per year. About 42% of its diet is honey bees.</p><br /><p>' +
                    'If you are a beekeeper and these beautiful and colorful birds approach the hives, especially in cloudy weather or after rain, and as you say, "nibble the bees", then keep in mind that there is a scientifically proven method that helps to fight against bee-eaters to some extent.</p><br /><p>' +
                    'In Armenia, in addition to the buzzing of bees, sometimes the sounds of wild birds come from the hives: those are played by beekeepers to drive the bee-eaters away. Furthermore, they fight against bee-eaters by connecting electric wires to wooden poles. However, according to scientific experience, both of these methods are almost useless. The most effective way to protect the hives from birds of prey is to fence off the hives, tie up the roof, and put water inside. Thus, the bees will not fly far away from hives in order to drink water, and the bee-eater will be unable to approach the hives.</p><br /><p>' +
                    'Some beekeepers kill birds with weapons, but the green bee-eater is registered in the Red Book of Armenia (The list of endangered animals, birds and fungus of Armenia). Thus, it is <a target="_blank" href="https://mediafactory.am/buzz_of_bees/">forbidden</a> to harm the bird. </p>',
                },
              },
            },
          ],
        },
        rightSide: {
          components: [
            {
              type: 'chart',
              scrollable: false,
              content: {
                key: generateKey( 'chart25' ),
                src: {
                  am: 'Chart3',
                  en: 'Chart3_en',
                },
                alt: 'A question to beekeepers',
                titleHTML: {
                  en: '<p>A question to beekeepers: <b>Have you noticed if the number of bee-eater birds <span>has increased</span> in the last 5 years?</b></p>',
                  am: '<p>Հարց մեղվապահին․ - <b>Վերջին 5 տարիներին մեղվակեր թռչունների թվի <span>աճ նկատե՞լ եք</span></b>։</p>',
                },
              },
            },
          ],
        },
      },
    ],
  },
  {
    key: generateKey( 'section26' ),
    title: {
      en: 'Queen bee',
      am: 'Մայր մեղու',
    },
    blocks: [
      {
        key: generateKey( 'blocks31' ),
        leftSide: {
          marginAuto: true,
          components: [
            {
              key: generateKey( 'components32' ),
              type: 'text',
              scrollable: true,
              content: {
                textHTML: {
                  am: '<p>Հարցված 100 մեղվապահներից 29-ը փեթակների քանակի նվազման պատճառ են նշում մայր մեղվի անարդյունավետությունը։</p><br /><p>' +
                    'Մեղվապահներին անհանգստացնում է մեղվամայրերի քիչ ձվարկելու և փեթակները հաճախ լքելու հանգամանքները։ </p>',
                  en: '<p>29 out of 100 surveyed beekeepers cite the inefficiency of the queen bee as the reason for the decrease in the amount of hives. </p><br /><p>' +
                    'Beekeepers are worried about the circumstances that queen bees lay fewer eggs and often leave the hives.</p>',
                },
              },
            },
          ],
        },
        rightSide: {
          components: [
            {
              type: 'image',
              scrollable: true,
              content: {
                key: generateKey( 'image33' ),
                src: 'Matchboxes',
                styles: {
                  marginTop: 0,
                  marginBottom: 0,
                },
                alt: 'matchboxes',
                description: {
                  am: 'Ուջանցի Արմանը հպարտությամբ ցույց է տալիս իր հին, կյանքն ապրած մեղվամայրերին, որոնց պահում է լուցկու տուփի մեջ։ Ձախից աջ՝ կծան, սուպեր։',
                  en: 'Arman from Ujan proudly shows his old, dead queen bees that he keeps in matchboxes. From left to right: biter, super.',
                },
              },
            },
          ],
        },
      },
    ],
  },
  {
    key: generateKey( 'section34' ),
    title: {
      en: 'Pesticides',
      am: 'Թունաքիմիկատներ',
    },
    blocks: [
      {
        key: generateKey( 'blocks35' ),
        leftSide: {
          components: [
            {
              key: generateKey( 'components36' ),
              type: 'text',
              scrollable: true,
              content: {
                textHTML: {
                  am: '<p>Մեղվապահությունն ու այգեգործությունը, գործնականում, հաճախ հակադրվում են․ լավ բերք ստանալու համար օգտագործվող թունաքիմիկատները թունավոր են մեղուների համար։ Չնայած սրսկումների հասցրած վնասների մասին խոսելիս՝ մեղվապահներից շատերը չեն մեղադրում այգեգործությամբ զբաղվող համագյուղացիներին։</p><br /><p>' +
                    'Թունաքիմիկատների վնասակար ազդեցությունն առավել տարածված է Արարատի, Արմավիրի, Շիրակի և մասամբ Արագածոտնի մարզերում, որտեղ զարգացած է հողագործությունը։</p><br /><p>' +
                    'Չնայած արտաքին գործոնների առկայությանը՝ հարցված մեղվապահներից տասը կարծում են, որ, այնուամենայնիվ, փեթակների որակն ու քանակը պայմանավորված է նաև մեղու պահողի հմտություններով և հոգատարությամբ (մարդկային գործոն)։ </p>',
                  en: '<p>Beekeeping and horticulture, in practice, are often opposed. The pesticides used to produce crops are poisonous to bees. Despite talking about the damage caused by spraying, many beekeepers do not blame their fellow villagers for gardening.</p><br /><p>' +
                    'The harmful effects of pesticides are more common in Ararat, Armavir, Shirak and partly Aragatsotn regions, where horticulture is more developed.</p><br /><p>' +
                    'Despite the presence of external factors, ten of the surveyed beekeepers believe that, nevertheless, the quality and quantity of hives is conditioned by the skills and care of the beekeeper (human factor).</p>',
                },
              },
            },
          ],
        },
        rightSide: {
          marginAuto: true,
          components: [
            {
              type: 'chart',
              scrollable: true,
              content: {
                key: generateKey( 'chart37' ),
                src: {
                  am: 'Chart4',
                  en: 'Chart4_en',
                },
                alt: 'A question to beekeepers',
                titleHTML: {
                  en: '<p>A question to the beekeeper: </p><p>' +
                    '<b>Do you use <span>pesticides</span> in your backyard?</b></p>',
                  am: '<p>Հարց մեղվապահներին. </p><p>' +
                    '<b>- Սեփական այգում <span>թունաքիմիկատներ</span> օգտագործու՞մ եք։</b></p>',
                },
              },
            },
          ],
        },
      },
    ],
  },
  {
    key: generateKey( 'section38' ),
    title: {
      en: 'Climate change',
      am: 'Կլիմայի փոփոխություն',
    },
    blocks: [
      {
        key: generateKey( 'blocks40' ),
        leftSide: {
          components: [
            {
              key: generateKey( 'components41' ),
              type: 'text',
              scrollable: false,
              content: {
                textHTML: {
                  en: '<p>Climate change not only directly affects the work of bees, but also exacerbates problems that are already common: diseases, mites, food and pollen quality, etc.</p><br /><p>' +
                    'Bees work at a slower pace when temperature increases above 30 °C. Bees work most diligently at 18-25 °C.  By the way, in some regions of Armenia the air temperature in summer exceeds the threshold of 40 °C.</p>',
                  am: '<p>Կլիմայի փոփոխությունը ոչ միայն ուղիղ կերպով ազդում է մեղուների աշխատանքի վրա, այլ նաև սրում արդեն իսկ տարածված խնդիրները՝ հիվանդություններ, տզեր, սննդի և ծաղկափոշու որակ և այլն։ </p><br /><p>' +
                    '30 °C-ից բարձր ջերմաստիճանի դեպքում մեղուների աշխատանքի տեմպն ընկնում է. ամենաժրաջան աշխատանքը միջատները կատարում են 18-25 °C-ի պայմաններում։ Ի դեպ, Հայաստանի որոշ շրջաններում օդի ջերմաստիճանն ամռանն անցնում է 40 °C-ի շեմը։</p>',
                },
              },
            },
          ],
        },
        rightSide: {
          components: [
            {
              type: 'chart',
              scrollable: true,
              content: {
                key: generateKey( 'chart42' ),
                className: 'mb-16 xm:mb-24 lg:mb-36',
                src: {
                  en: 'Chart5_en',
                  am: 'Chart5',
                },
                alt: 'The average annual air',
                titleHTML: {
                  am: '<p><b>Օդի տարեկան միջին ջերմաստիճանը <span>բարձրացել է</span></b></p>',
                  en: '<p><b>The average annual air temperature has risen</b></p>',
                },
              },
            },
            {
              type: 'chart',
              scrollable: true,
              content: {
                key: generateKey( 'chart43' ),
                src: {
                  en: 'Chart6_en',
                  am: 'Chart6',
                },
                alt: 'Average deviation of air',
                titleHTML: {
                  am: '<p><b>Օդի տարեկան միջին ջերմաստիճանի շեղումը 1961-1990 թթ. նորմայից</b></p>',
                  en: '<p><b>Average deviation of air temperature from norm of 1961-1990</b></p>',
                },
              },
            },
          ],
        },
      },
      {
        key: generateKey( 'blocks44' ),
        leftSide: {
          components: [
            {
              key: generateKey( 'components45' ),
              type: 'text',
              scrollable: false,
              content: {
                textHTML: {
                  am: '<p>«Մենք սովորաբար մեր մեղվաընտանիքները ապրիլի 4-6-ի միջակայքում ենք հանում ձմեռանոցից, երբ դրսի ջերմաստիճանը մոտ 14-15 °C է, բայց վերջերս սկսել ենք մարտ ամսին դուրս հանել։ Մեղուն անգամ մեղվանոցում դրած է արթնանում, զգում է, որ ջերմաստիճանը բարձրանում է»,- պատմում է Շիրակի մարզի Քեթի գյուղի մեղվապահ Մելանյան։ Բանն այն է, որ իրենց շրջանում մեղուն զարգանում և աճում է մինչև հուլիս ամիս, սակայն տաք ջերմաստիճանից պտղածաղիկն արագ սպառվում է և սկսում է ծառերի բողբոջելը, իսկ դեռ չզարգացած մեղուն չի հասցնում իր գործն անել։</p>',
                  en: '<p>"We usually take our beehives out of the winter house between April 4-6, when the outside temperature is around 14-15 °C, but recently we started taking them out in March. The bee even wakes up in the apiary and feels that the temperature is rising," says Melania, a beekeeper in the village of Keti, Shirak region. The point is that in their region the bee develops and grows until July, but due to the hot temperature, the fruit flower quickly expires, the trees start to sprout, and the undeveloped bee does not have time to do its job.</p>',
                },
              },
            },
          ],
        },
        rightSide: {
          components: [
            {
              type: 'images',
              scrollable: true,
              height: '340px',
              content: [
                {
                  key: generateKey( 'image46' ),
                  src: 'outOfHive',
                  alt: 'Out of the hive',
                  className: 'xm:mb-28 lg:mb-32',
                  description: {
                    en: 'According to Abgar, a beekeeper in the village of Khachardzan in Tavush, what is depicted in the pictures shows unusual behavior by bees։ they came out of the hive in the evening to cool off․',
                    am: 'Տավուշի Խաչարձան գյուղի մեղվապահ Աբգարի կարծիքով նկարներում պատկերվածը մեղուների կողմից անսովոր վարքի դրսևորում է․ նրանք երեկոյան ժամին փեթակից դուրս են եկել հովանալու։',
                  },
                },
                {
                  key: generateKey( 'image47' ),
                  src: 'Bees',
                  alt: 'Bees',
                  descriptionMobile: {
                    en: 'According to Abgar, a beekeeper in the village of Khachardzan in Tavush, what is depicted in the pictures shows unusual behavior by bees։ they came out of the hive in the evening to cool off․',
                    am: 'Տավուշի Խաչարձան գյուղի մեղվապահ Աբգարի կարծիքով նկարներում պատկերվածը մեղուների կողմից անսովոր վարքի դրսևորում է․ նրանք երեկոյան ժամին փեթակից դուրս են եկել հովանալու։',
                  },
                },
              ],
            },
          ],
        },
      },
      {
        key: generateKey( 'blocks51' ),
        leftSide: {
          components: [
            {
              key: generateKey( 'components52' ),
              type: 'text',
              scrollable: true,
              content: {
                textHTML: {
                  am: '<p>Տեղումների շատ և քիչ լինելը ուղիղ կերպով ազդում է մեղուների բերքատվության վրա։ Գյուղատնտեսական կուլտուրաների բնականոն աճի համար անհրաժեշտ ջուրն ու  խոնավությունը գնալով պակասում է։ 2021-ի մասին խոսելիս բոլոր մեղվապահները հիշատակում են «երաշտ» բառը, նշելով, որ այսպիսի չորային տարի շատ վաղուց չէր եղել։</p><br /><p>' +
                    'Արտավան գյուղը, որտեղ բնակվում է մեղվապահ Կարինեն, Վայոց Ձորի բարձրադիր բնակավայրերից է, գտնվում է ծովի մակերևույթից 1880 մետրի վրա։  </p><br /><p>' +
                    '«Առաջ մեզ մոտ անգամ լոլիկը չէր կարմրում, իսկ ձյուն շատ էր գալիս։ Հիշում եմ՝ ձյան հաստ շերտի մեջ թունելներ էինք սարքում, որ տրակտորներով կարողանայինք անցնել։ Վերջին 20 տարին նման բան չկա, լոլիկն էլ կարմրում է»,- պատմում է Կարինեն։</p>',
                  en: '<p>Less or more rainfall directly affects the productivity of bees. The water and moisture needed for the normal growth of agricultural crops are decreasing. When talking about 2021, all beekeepers mention the word "drought", noting that such a dry year has not happened for a long time.</p><br /><p>' +
                    'The village of Artavan, where the beekeeper Karine lives, is one of the highland settlements of Vayots Dzor, located at 1880 meters above sea level.</p><br /><p>' +
                    '"Back then, even our tomatoes did not turn red, and there was a lot of snow. I remember we were making tunnels in a thick layer of snow so that we could cross with tractors. "There has been no such thing for the last 20 years, and the tomatoes are turning red," says Karine.</p>',
                },
              },
            },
          ],
        },
        rightSide: {
          marginAuto: true,
          components: [
            {
              type: 'chart',
              scrollable: true,
              content: {
                key: generateKey( 'chart53' ),
                src: {
                  en: 'Chart7_en',
                  am: 'Chart7',
                },
                alt: 'Average deviation of atmospheric',
                titleHTML: {
                  am: '<p><b>Մթնոլորտային տեղումների քանակի շեղումը 1960-1990 թթ. նորմայից</b></p>',
                  en: '<p><b>Average deviation of atmospheric precipitations from norm of 1961-1990</b></p>',
                },
              },
            },
          ],
        },
      },
      {
        key: generateKey( 'blocks55' ),
        leftSide: {
          components: [
            {
              key: generateKey( 'components56' ),
              type: 'text',
              scrollable: true,
              content: {
                textHTML: {
                  am: '<p>Ջերմոցային գազերի լավագույն բացատրությունը տվել է NASA-ի մանկական նախագիծը․</p><br /><p>' +
                    '«Ջերմոցային գազերը Երկիր մոլորակի մթնոլորտում գտնվող ու ջերմությունը պահող գազերն են։ Դրանք արևի լույսին թույլ են տալիս ներթափանցել մթնոլորտ և չեն կարողանում այդ նույն արևի լույսի բերած ջերմությունը դուրս հանել մթնոլորտից»: Գրաֆիկում ներկայացված գազերի ամբողջությունն արևի ջերմության հետ միասին առաջացնում են ջերմոցային էֆեկտ, որը կլիմայի փոփոխության գլխավոր բաղկացուցիչներից է։</p><br /><p>' +
                    'Հյուսիսամերիկյան մեղուների վրա կատարած հետազոտության համաձայն՝ որքան ավելանում է CO2-ի քանակը, այնքան նվազում է միջատների համար անփոխարինելի սնունդ համարվող ծաղկափոշու մեջ սպիտակուցի քանակը։</p>',
                  en: '<p>The best explanation for greenhouse gases is given by the NASA children\'s project “ClimateKids: "Greenhouse gases are gases in Earth’s atmosphere that trap heat. They let sunlight pass through the atmosphere, but they prevent the heat that the sunlight brings from leaving the atmosphere". All the gases shown in the graph, together with the heat of the sun, produce a greenhouse effect, which is one of the main components of climate change.</p><br /><p>' +
                    'According to a study on North American bees, the higher the amount of CO2 is, the lower the amount of protein in pollen, which is considered an essential food for insects.</p>',
                },
              },
            },
          ],
        },
        rightSide: {
          marginAuto: true,
          components: [
            {
              type: 'chart',
              scrollable: true,
              content: {
                key: generateKey( 'chart57' ),
                src: 'Chart8',
                alt: 'Greenhouse',
                titleHTML: {
                  am: '<p><b>Ջերմոցային գազերի արտանետումները ևս <span>ավելացել են</span></b></p>',
                  en: '<p><b>Greenhouse gas emissions have also <span>increased</span></b></p>',
                },
              },
            },
          ],
        },
      },
    ],
  },
  {
    key: generateKey( 'section87' ),
    title: {
      en: 'The beekeeper’s social issues',
      am: 'Մեղվապահի սոցիալական խնդիրները',
    },
    blocks: [
      {
        key: generateKey( 'blocks86' ),
        leftSide: {
          components: [
            {
              type: 'video',
              scrollable: true,
              onlyMobile: true,
              content: {
                key: generateKey( 'video84' ),
                type: 'soundcloud',
                className: 'mb-12',
                src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1144902490&color=%23ff5500&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true',
                description: {
                  en: 'Armenak, a beekeeper from the village of Shikahogh in the Syunik region, which became a bordering settlement after the war, talks about his problems taking care of bees.',
                  am: 'Պատերազմից հետո սահմանամերձ դարձած Սյունիքի մարզի Շիկահող գյուղի մեղվապահ Արմենակը պատմում է մեղուների մասին հոգ տանելու իր խնդիրների մասին։ ',
                },
              },
            },
            {
              key: generateKey( 'components85' ),
              type: 'text',
              scrollable: false,
              content: {
                textHTML: {
                  en: '<p>The rate of bee work, the quality and quantity of their consumed food and produced honey are directly proportional to the social status of the beekeeper.</p><br /><p>' +
                    'One bee colony costs 40,000 drams (approx.: 84 USD) on average this year, the decline of each bee family can cause serious financial and agricultural problems for the beekeeper. Agricultural insurance operates only on lands to protect several types of crops, and agricultural loans are provided to very few. </p><br /><p>' +
                    'Many beekeepers say they do not intentionally increase the number of hives because they can not sell the honey. Beekeepers of all regions state that there are almost no places for selling (procuring) the received honey. It turns out that the beekeeper works all year without insurance, suffers a lot of losses, and in the end does not receive the expected income.</p><br /><p>' +
                    'Sometimes municipalities or private organizations donate hives to villagers, but in practice there are very few examples of that. Along with all this, the war in 2020 directly affected not only the beekeepers living in the bordering areas, but almost everyone: many did not have time to deal with bees because of their involvement in the war.</p>',
                  am: '<p>Մեղվի աշխատանքի տեմպը, ընդունած սննդի և արտադրած մեղրի որակն ու քանակը ուղիղ համեմատական են մեղվապահի սոցիալական վիճակի հետ։ </p><br /><p>' +
                    'Մեղվի մեկ փեթակն այս տարի միջինում արժե 40 հազար դրամ, և յուրաքանչյուր մեղվաընտանիքի անկում կարող է ֆինանսական և գյուղատնտեսական լուրջ խնդիրների առաջ կանգնեցնել մեղվապահին։ Գյուղատնտեսական ապահովագրությունները գործում են միայն հողատարածքների՝ մի քանի տեսակ մշակաբույսեր պաշտպանելու համար, գյուղատնտեսական վարկեր էլ շատ քչերի են տրամադրում։ </p><br /><p>' +
                    'Շատ մեղվապահներ ասում են, որ փեթակների քանակը դիտավորյալ չեն շատացնում, որովհետև բերքը չեն կարողանում վաճառել: Բոլոր շրջանների մեղվապաները փաստում են, որ ստացված մեղրի իրացման (մթերման) տեղեր գրեթե գոյություն չունեն։ Ստացվում է, որ մեղվապահն ամբողջ տարի աշխատում է առանց ապահովագրության, կրում բազմաթիվ վնասներ, վերջում էլ չի ստանում սպասված եկամուտը։ </p><br /><p>' +
                    'Երբեմն համայնքապետարանները կամ մասնավոր կազմակերպությունները փեթակներ են նվիրաբերում գյուղացիներին, բայց դրանց օրինակները, գործնականում, շատ քիչ են։ Այս ամենի հետ մեկտեղ 2020 թվականի պատերազմը ուղիղ կերպով ազդեց ոչ միայն սահմանամերձ գոտիներում ապրող մեղվապահների, այլ գրեթե բոլորի վրա․ շատերը պատերազմական գործողություններին մասնակցելու պատճառով մեղուներով զբաղվելու ժամանակ չունեին։ </p>',
                },
              },
            },
          ],
        },
        rightSide: {
          components: [
            {
              type: 'video',
              scrollable: true,
              onlyWeb: true,
              content: {
                key: generateKey( 'video84' ),
                type: 'soundcloud',
                className: 'mb-16 xm:mb-20 lg:mb-36',
                src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1144902490&color=%23ff5500&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true',
                description: {
                  en: 'Armenak, a beekeeper from the village of Shikahogh in the Syunik region, which became a bordering settlement after the war, talks about his problems taking care of bees.',
                  am: 'Պատերազմից հետո սահմանամերձ դարձած Սյունիքի մարզի Շիկահող գյուղի մեղվապահ Արմենակը պատմում է մեղուների մասին հոգ տանելու իր խնդիրների մասին։ ',
                },
              },
            },
            {
              type: 'images',
              scrollable: true,
              height: '285px',
              content: [
                {
                  key: generateKey( 'image83' ),
                  src: 'Shirak1',
                  alt: 'Shirak 1',
                  description: {
                    en: 'Krashen, Shirak',
                    am: 'Կրաշեն, Շիրակ,',
                  },
                },
                {
                  key: generateKey( 'image62' ),
                  src: 'Shirak2',
                  alt: 'Shirak 2',
                  descriptionMobile: {
                    en: 'Krashen, Shirak',
                    am: 'Կրաշեն, Շիրակ,',
                  },
                },
                {
                  key: generateKey( 'image366' ),
                  src: 'Shirak3',
                  alt: 'Shirak 3',
                  descriptionMobile: {
                    en: 'Krashen, Shirak',
                    am: 'Կրաշեն, Շիրակ,',
                  },
                },
              ],
            },
          ],
        },
      },
      {
        key: generateKey( 'blocks123' ),
        leftSide: {
          marginAuto: true,
          components: [
            {
              key: generateKey( 'components312' ),
              type: 'text',
              scrollable: false,
              content: {
                textHTML: {
                  am: '<p>Մեղվապահական համայնքը բազմազան չէ․ նրանցից շատերը մեծահասակ տղամարդիկ են, որոնք հետո այդ զբաղմունքը, հիմնականում, ժառանգաբար փոխանցում են իրենց զավակներին։ Հարցված 100 մեղվապահներից միայն 9-ն էին կանայք։</p>',
                  en: '<p>The beekeeping community is not diverse. Many of them are adult men, who then pass on the occupation, mainly by inheritance to their children. Only 9 out of 100 surveyed beekeepers were women.</p>',
                },
              },
            },
          ],
        },
        rightSide: {
          components: [
            {
              type: 'video',
              scrollable: false,
              content: {
                key: generateKey( 'video345' ),
                type: 'youtube',
                styles: {
                  marginTop: 0,
                  marginBottom: 0,
                },
                src: 'https://www.youtube.com/embed/m8a_pRrKPC4',
                description: {
                  en: 'Kaitserouhi has 42 bee colonies (Kakavadzor, Aragatsotn).',
                  am: 'Կայծերուհին ունի 42 մեղվաընտանիք (Կաքավաձոր, Արագածոտն)',
                },
              },
            },
          ],
        },
      },
    ],
  },

  {
    key: generateKey( 'section456' ),
    title: {
      en: 'Posible solutions',
      am: 'Հնարավոր լուծումներ',
    },
    blocks: [
      {
        key: generateKey( 'blocks654' ),
        leftSide: {
          components: [
            {
              key: generateKey( 'components756' ),
              type: 'text',
              scrollable: true,
              content: {
                textHTML: {
                  am: '<p>100 մեղվապահի հետ հանդիպել ու զրուցելը միաժամանակ բարդ էր ու հաճելի, ճանապարհները հոգնեցնող էին, բայց զրույցների ընթացքում նրանցից ստացած էներգիան բավական էր ամբողջ օրը լիցքավորված զգալու համար։ Այդպիսի ջերմ ու դրական էներգիայով էլ մեղվապահները փորձում են «եղանակից կախված» իրենց գործով մշտապես հարմարվել նոր դժվարություններին ու կլիմայական անկանխատեսելի ազդեցություններին։ </p><br /><p>' +
                    'Մաքուր մեղր փնտրելուց առաջ նախ պետք է հասկանալ, որ այն ստեղծելը հեշտ չէ։ Ժամանակատար այս գործի համար երբեմն պետք են գալիս օգնող ուժեր. փեթակները  տեղափոխելու համար մեքենաներ, ստացած մեղրի համար մշտական մթերման կետեր, ապահովագրական երաշխիքներ և այլն։ </p><br /><p>' +
                    'Մեղվապահական ոլորտին անհրաժեշտ են նաև համակարգային ու ֆինանսական աջակցություններ, մեղվապահական գործող միություններ, վստահելի ու մատչելի տեղեկատվական աղբյուրներ և մշտադիտարկումներ։ </p>',
                  en: '<p>Meeting and talking with 100 beekeepers was difficult and enjoyable at the same time, the roads were tiring, but the energy received from them during the conversations was enough to feel delighted all day. With such warm and positive energy, beekeepers try to constantly adapt to new difficulties and unpredictable climatic influences in their work "depending on the weather".</p><br /><p>' +
                    'Before looking for pure honey, one must first understand that it is not easy to make. Helping forces are sometimes needed for this time-consuming task: vehicles for moving the hives, permanent procurement points for the produced honey, insurance guarantees, etc.</p><br /><p>' +
                    'The beekeeping sector also needs systemic and financial support, operating beekeeping associations, reliable and accessible sources of information and systematic monitoring.</p>',
                },
              },
            },
          ],
        },
        rightSide: {
          components: [
            {
              type: 'video',
              scrollable: false,
              content: {
                key: generateKey( 'video890' ),
                type: 'youtube',
                src: 'https://www.youtube.com/embed/rRvKXQgxjmM',
                description: {
                  en: 'Alexan Yeghiazaryan explains why the wooden hives should be replaced by the polyurethane ones.',
                  am: 'Ալեքսյան Եղիազարյանը պատմում է, թե ինչու է պետք փայտե փեթակները փոխարինել պոլիուրետանից պատրաստվածներով։',
                },
              },
            },
          ],
        },
      },
      {
        key: generateKey( 'blocks098' ),
        leftSide: {
          marginAuto: true,
          components: [
            {
              key: generateKey( 'components9945' ),
              type: 'text',
              scrollable: false,
              content: {
                textHTML: {
                  en: '<p>And if you’re not a beekeeper but you want to help bees and other pollinators then plant as many trees and flowers as possible, especially nectar producing ones.</p><br /><p>' +
                    'And never let the buzz of bees fade!</p>',
                  am: '<p>Իսկ եթե մեղվապահ չես, բայց ուզում ես մեղուներին ու մնացած այլ փոշոտողներին օգնել, ապա շատ ծառեր ու ծաղիկներ տնկիր, հատկապես նեկտարատու։ </p><br /><p>' +
                    'Ու թող մեղուների բզզոցը չդադարի՜։ </p>',
                },
              },
            },
          ],
        },
        rightSide: {
          components: [
            {
              type: 'image',
              scrollable: false,
              content: {
                key: generateKey( 'image123123' ),
                src: 'Aralez',
                styles: {
                  marginTop: 0,
                  marginBottom: 0,
                },
                alt: 'Aralez',
                description: {
                  am: 'Արալեզ, Արարատ',
                  en: 'Aralez, Ararat.',
                },
              },
            },
          ],
        },
      },
    ],
  },
]
