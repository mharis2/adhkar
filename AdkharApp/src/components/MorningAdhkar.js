import React, { useState } from 'react';
import { ScrollView, Text, StyleSheet, View, Linking, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

const adhkarData = [
  {
    recitationAmount: "Recite once",
    arabicText: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ",
    englishTranslation: "O Allah, You are my Lord; none has the right to be worshipped but You. You created me and I am Your slave. I keep Your covenant and promise as much as I can. I seek refuge in You from the evil of what I have done. I acknowledge before You all the blessings You have bestowed upon me, and I confess to You all my sins. So forgive me, for none can forgive sins except You.",
    referenceText: "Reference: Sahih Al-Bukhari 6306, 6323",
    referenceNarration: `The Messenger of Allah (ﷺ) said: 

"Whoever says this during the day with firm belief in it, and dies on that day before evening, he will be one of the people of Paradise. And whoever says it at night with firm belief in it, and dies before morning, he will be one of the people of Paradise."`,
    referenceUrl: "https://sunnah.com/bukhari:6306"
  },
  {
    recitationAmount: "Recite once",
    arabicText: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ وَالْحَمْدُ لِلَّهِ لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذَا الْيَوْمِ وَخَيْرَ مَا بَعْدَهُ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذَا الْيَوْمِ وَشَرِّ مَا بَعْدَهُ، رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ",
    englishTranslation: "We have entered a new morning, and sovereignty has entered the morning for Allah, and all praise is for Allah. None has the right to be worshipped but Allah alone, having no partner. Sovereignty belongs to Him, and praise is for Him, and He has power over everything. O my Lord, I ask You for the good of this day and the good of what follows it, and I seek refuge in You from the evil of this day and the evil of what follows it. O my Lord, I seek refuge in You from laziness and decrepit old age. O my Lord, I seek refuge in You from punishment in the fire and punishment in the grave.",
    referenceText: "Reference: Sahih Muslim 2723",
    referenceNarration: `Abdullah reported that when it was evening Allah's Messenger (ﷺ) used to supplicate:

"We have entered upon evening and so, too, the whole Kingdom of Allah has entered upon evening. Praise is due to Allah. There is no god but Allah, the One having no partner with Him."

He (the narrator) said: I think that he also uttered (in this supplication these words): "His is the Sovereignty and to Him is praise due and He is Potent over everything. My Lord, I beg of Thee good that lies in this night and good that follows it and I seek refuge in Thee from the evil that lies in this night and from the evil of that which follows it. My Lord, I seek refuge in Thee from sloth, from the evil of vanity. My Lord, I seek refuge in Thee from torment of the Hell-Fire and from torment of the grave."

And when it was morning he said like this: "We entered upon morning and the whole Kingdom of Allah entered upon morning."`,
    referenceUrl: "https://sunnah.com/muslim:2723"
  },
  {
    recitationAmount: "Recite three times",
    arabicText: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ عَدَدَ خَلْقِهِ، وَرِضَا نَفْسِهِ، وَزِنَةَ عَرْشِهِ، وَمِدَادَ كَلِمَاتِهِ",
    englishTranslation: "Glory is to Allah, and praise is to Him, by the number of His creation, and by the pleasure of Himself, and by the weight of His Throne, and by the extent of His Words.",
    referenceText: "Reference: Sahih Muslim 2726",
    referenceNarration: `Juwairiya reported that Allah's Messenger (ﷺ) came out from (her apartment) in the morning as she was busy in observing her dawn prayer in her place of worship. He came back in the forenoon and she was still sitting there. He (the Holy Prophet) said to her:

"You have been in the same seat since I left you."

She said: Yes.

Thereupon Allah's Apostle (ﷺ) said: "I recited four words three times after I left you and if these are to be weighed against what you have recited since morning these would outweigh them and (these words) are: 

'Hallowed be Allah and praise is due to Him according to the number of His creation and according to the pleasure of His Self and according to the weight of His Throne and according to the ink (used in recording) words (for His Praise).'"`,
    referenceUrl: "https://sunnah.com/muslim:2726"
  },
  {
    recitationAmount: "Recite 100 times",
    arabicText: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ",
    englishTranslation: "Glory is to Allah and praise is to Him.",
    referenceText: "Reference: Sahih Muslim 2692",
    referenceNarration: `The Messenger of Allah (ﷺ) said: 

"Whoever says: Subhanallahi wa bihamdihi (Glory is to Allah and praise is to Him) one hundred times a day, his sins will be forgiven even if they are like the foam of the sea."`,
    referenceUrl: "https://sunnah.com/muslim:2692"
  },
  {
    recitationAmount: "Recite three times",
    arabicText: "قُلْ هُوَ اللَّهُ أَحَدٌ, قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ, قُلْ أَعُوذُ بِرَبِّ النَّاسِ",
    englishTranslation: "Say, 'He is Allah, [Who is] One,' Say, 'I seek refuge in the Lord of daybreak,' Say, 'I seek refuge in the Lord of mankind,'",
    referenceText: "Reference: Aboo Daawood 5082",
    referenceNarration: `Narrated Abdullah ibn Khubayb: 

"We went out one rainy and intensely dark night to look for the Messenger of Allah (ﷺ) to lead us in prayer, and when we found him, he asked: Have you prayed?, but I did not say anything. So he said: Say, but I did not say anything. He again said: Say, but I did not say anything. He then said: Say. So I said: What am I to say? He said: Say: 'Say, He is Allah, One,' and al-Mu'awwadhatan three times in the morning and evening; they will serve you for every purpose."`,
    referenceUrl: "https://sunnah.com/abudawud:5082"
  },
  {
    recitationAmount: "Recite once",
    arabicText: "اللَّهُمَّ بِكَ أَصْبَحْنَا وَبِكَ أَمْسَيْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوتُ وَإِلَيْكَ النُّشُورُ",
    englishTranslation: "O Allah, by Your permission, we have reached the morning, and by Your permission, we reach the evening, and by Your permission, we live, and by Your permission, we die, and to You is the resurrection.",
    referenceText: "Reference: Al-Adabul-Mufrad 1199",
    referenceNarration: `Abu Hurayra said:

"In the morning, the Prophet, may Allah bless him and grant him peace, would say, 'O Allah, We enter the morning by You and we enter the evening by You. We live by You and we die by You and to You is gathering.' In the evening, he would say, 'O Allah, we enter the evening by You and we enter the morning by You and we live by You and we die by You and to You is the return.'"`,
    referenceUrl: "https://sunnah.com/adab:1199"
  },
  {
    recitationAmount: "Recite three times",
    arabicText: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ",
    englishTranslation: "In the name of Allah, with whose name nothing on earth or in the heaven can harm, and He is the All-Hearing, the All-Knowing.",
    referenceText: "Reference: Aboo Daawood 5088",
    referenceNarration: `Narrated Uthman ibn Affan:

Aban ibn Uthman said: I heard Uthman ibn Affan (his father) say: I heard the Messenger of Allah (ﷺ) say: "If anyone says three times: 'In the name of Allah, when Whose name is mentioned nothing on Earth or in Heaven can cause harm, and He is the Hearer, the Knower' he will not suffer sudden affliction till the morning, and if anyone says this in the morning, he will not suffer sudden affliction till the evening."

Aban was afflicted by some paralysis and when a man who heard the tradition began to look at him, he said to him: Why are you looking at me? I swear by Allah, I did not tell a lie about Uthman, nor did Uthman tell a lie about the Prophet (ﷺ), but that day when I was afflicted by it, I became angry and forgot to say them.`,
    referenceUrl: "https://sunnah.com/abudawud:5088"
  },
  {
    recitationAmount: "Recite once",
    arabicText: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي دِينِي وَدُنْيَايَ وَأَهْلِي وَمَالِي، اللَّهُمَّ اسْتُرْ عَوْرَاتِي وَآمِنْ رَوْعَاتِي، وَاحْفَظْنِي مِنْ بَيْنِ يَدَيَّ وَمِنْ خَلْفِي وَعَنْ يَمِينِي وَعَنْ شِمَالِي وَمِنْ فَوْقِي، وَأَعُوذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِي",
    englishTranslation: "O Allah, I ask You for well-being and security in my religion, my worldly life, my family, and my wealth. O Allah, conceal my faults and keep me safe from that which I fear. O Allah, guard me from in front of me and from behind me, and from my right and from my left, and from above me. I seek refuge in Your greatness from being unexpectedly destroyed from beneath me.",
    referenceText: "Reference: Aboo Daawood 5074",
    referenceNarration: `Narrated Abdullah ibn Umar:

"The Messenger of Allah (ﷺ) never failed to utter these supplications in the evening and in the morning: 'O Allah, I ask Thee for security in this world and in the Hereafter: O Allah! I ask Thee for forgiveness and security in my religion and my worldly affairs, in my family and my property; O Allah! conceal my fault or faults (according to Uthman's version), and keep me safe from the things which I fear; O Allah! guard me in front of me and behind me, on my right hand and on my left, and from above me: and I seek in Thy greatness from receiving unexpected harm from below me.'"

AbuDawud said: Waki' said: That is to say, swallowing by the earth.`,
    referenceUrl: "https://sunnah.com/abudawud:5074"
  },
  {
    recitationAmount: "Recite once",
    arabicText: "رَضِيتُ بِاللَّهِ رَبًّا وَبِالْإِسْلَامِ دِينًا وَبِمُحَمَّدٍ نَبِيًّا",
    englishTranslation: "I am pleased and satisfied with Allah as my Lord, with Islam as my religion, and with Muhammad as my Prophet.",
    referenceText: "Reference: Ibn Majah 3870",
    referenceNarration: `The Prophet (ﷺ) said: 

"There is no Muslim - or no person, or slave (of Allah) - who says, in the morning and evening: 'Radaytu billahi Rabban wa bil-Islami dinan wa bi Muhammadin nabiyyan (I am content with Allah as my Lord, Islam as my religion and Muhammad as my Prophet),' but he will have a promise from Allah to make him pleased on the Day of Resurrection."`,
    referenceUrl: "https://sunnah.com/ibnmajah:3870"
  },
  {
    recitationAmount: "Recite once",
    arabicText: "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا",
    englishTranslation: "O Allah, I ask You for beneficial knowledge, for good and pure provision, and for deeds which are accepted by You.",
    referenceText: "Reference: Ibn Maajah 925",
    referenceNarration: `It was narrated from Umm Salamah that when the Prophet (ﷺ) performed the Subh (morning prayer), while he said the Salam, he would say:

'Allahumma inni as’aluka ‘ilman nafi’an, wa rizqan tayyiban, wa ‘amalan mutaqabbalan (O Allah, I ask You for beneficial knowledge, goodly provision and acceptable deeds).'`,
    referenceUrl: "https://sunnah.com/ibnmajah:925"
  }
];


export default function MorningAdhkar() {
  const [expanded, setExpanded] = useState(Array(adhkarData.length).fill(false));

  const toggleExpand = (index) => {
    setExpanded(expanded.map((item, i) => (i === index ? !item : item)));
  };

  return (
    <ScrollView style={styles.container}>
      {adhkarData.map((adhkar, index) => (
        <View style={styles.duaContainer} key={index}>
          <Text style={styles.times}>{adhkar.recitationAmount}</Text>
          <Text style={styles.arabic}>{adhkar.arabicText}</Text>
          <Text style={styles.translation}>{adhkar.englishTranslation}</Text>
          <TouchableOpacity onPress={() => toggleExpand(index)} style={styles.dropdown}>
            <Text style={styles.dropdownText}>Show Reference</Text>
            <Icon name={expanded[index] ? 'chevron-up' : 'chevron-down'} type='feather' color='#FFA726' />
          </TouchableOpacity>
          {expanded[index] && (
            <View style={styles.referenceContainer}>
              <Text style={styles.referenceNarration}>{adhkar.referenceNarration}</Text>
              <Text style={styles.referenceLink} onPress={() => Linking.openURL(adhkar.referenceUrl)}>
                {adhkar.referenceText}
              </Text>
            </View>
          )}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FAF3E0', // Light Beige background
    padding: 20,
  },
  duaContainer: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#FFF8E1', // Very Light Beige
    borderRadius: 10,
    elevation: 1,
  },
  times: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333', // Dark Grey
    marginBottom: 5,
  },
  arabic: {
    fontFamily: 'Amiri-Regular', // Use custom font
    fontSize: 20,
    textAlign: 'right',
    color: '#333333', // Dark Grey
    marginBottom: 10,
  },
  translation: {
    fontSize: 16,
    color: '#333333', // Dark Grey
    marginBottom: 10,
  },
  dropdown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  dropdownText: {
    fontSize: 16,
    color: '#FFA726', // Light Orange
  },
  referenceContainer: {
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  referenceNarration: {
    fontSize: 14,
    color: '#333333', // Dark Grey
    marginBottom: 10,
    textAlign: 'left', // Align text to the left
  },
  referenceLink: {
    fontSize: 14,
    color: '#1E90FF', // Blue for clickable link
    textDecorationLine: 'underline',
  },
});
