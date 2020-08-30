const notes = [
   {
       no: 1,
       note: 'Langa, M. 2018, ‘Moshekwa Langa’. <i>Cité International des Arts</i>, viewed 23 January 2020, <a href="https://www.citedesartsparis.net/ en/moshekwa-langa">https://www.citedesartsparis.net/ en/moshekwa-langa</a>. Langa’s extensive ideas and work around place, dislocation and time keeping have been important anchors and openings to think from and with.'
   }, 
   {
       no: 2,
       note: 'As noted in the abstract, this text is primarily based on open source research of online news, articles, videos, images and interviews around the fire and implosion of the Bank of Lisbon. The text is neither impartial nor comprehensive, but a selective re-mediation of existing information and key narratives. In this it draws on investigations by journalists, the tone and repetitive, abbreviated mode of news media, and what has not been published. My attempts to reach city officials, employees and firemen, or locate building plans have mainly led to dead ends. '
   },

   {
    no: 3,
    note: 'Description of blast plan and preparation by Joe Brinkmann, director of the company Jet Demolition, which was contracted to demolish the Bank of Lisbon by the Gauteng Department of Infrastructure Development. ‘106-m high Bank of Lisbon implosion is one of the most complex projects ever undertaken by Jet Demolition’ 2019, <i>Mining News</i>, 01 December, viewed 20 December 2019, <a href="https://www.miningsafety.co.za/newscontent/10220/108-m-high-bank-of-lisbon-implosion-is-one-of-the-most-complex-projects-ever-undertaken-by-jet-demolition">https://www.miningsafety.co.za/newscontent/10220/108-m-high-bank-of-lisbon-implosion-is-one-of-the-most-complex-projects-ever-undertaken-by-jet-demolition</a>.'
},

{
    no: 4,
    note: 'Makhoba, N 2019, ‘Bank of Lisbon: ‘The building was demolished to destroy evidence’. <i>CityPress</i>, 01 December, viewed January 2020, <a href="https://www.news24.com/citypress/News/bank-of-lisbon-the-building-was-demolished-to-destroy-evidence-20191201">https://www.news24.com/citypress/News/bank-of-lisbon-the-building-was-demolished-to-destroy-evidence-20191201</a>. '
},

{
    no: 5,
    note: '‘City releases some findings about Bank of Lisbon fire’, 2019., <i>Bedfordview and Edenvale News</i>, 29 September, viewed May 2020, <a href="https://bedfordviewedenvalenews.co.za/411658/city-releases-some-findings-about-bank-of-lisbon-fire/">https://bedfordviewedenvalenews.co.za/411658/city-releases-some-findings-about-bank-of-lisbon-fire/</a>. The article indicates that ‘the findings’ of the report commissioned by EMS were revealed to the families of the deceased firefighters at the end of September 2018 but does not go into further detail. '
},

{
    no: 6,
    note: '‘Bank of Lisbon Building Johannesburg – Demolished’, <i>The Heritage Register</i>, viewed 15 January 2020,  <a href="http://www.heritageregister.org.za/node/372">http://www.heritageregister.org.za/node/372</a>.'
},

{
    no: 7,
    note: '‘Curtain Wall, 1948-1965’, Historic Preservation, <i>Dept. of Archaeology and Historic Preservation</i>, viewed 24 April 2020, <a href="https://dahp.wa.gov/historic-preservation/historic-buildings/architectural-style-guide/curtain-wall">https://dahp.wa.gov/historic-preservation/historic-buildings/architectural-style-guide/curtain-wall</a>.'
},

{
    no: 8,
    note: 'MEC: Members of the Executive Council, which constitutes the cabinet of the provincial government  and includes the premier and appointed members who are the political heads of provincial departments. See: <a href="https://www.gov.za/about-government/government-system/structure-and-functions-south-african-government">https://www.gov.za/about-government/government-system/structure-and-functions-south-african-government</a>'
},

{
    no: 9,
    note: 'Conversation and email exchange with artist, May 2020.'
},

{
    no: 10,
    note: '<i>Negligence to blame for Joburg fire</i>, 2018,  radio programme, SABC Radio, 07 September, viewed 30 April 2020,  <a href="https://www.sabcnews.com/sabcnews/negligence-to-blame-for-joburg-fire/">https://www.sabcnews.com/sabcnews/negligence-to-blame-for-joburg-fire/</a>.'
},

{
    no: 11,
    note: 'Ibid.'
},

{
    no: 12,
    note: 'SABC NEWS 2018, <i>NEHAWU reacts to Joburg building fire</i>, online video, YouTube, viewed 22 March 2020, <a href="https://www.youtube.com/watch?v=OCMLJmxhDWY">https://www.youtube.com/watch?v=OCMLJmxhDWY</a>. See also: ‘Labour pushes for improved occupational safety regulations’ 2018, <i>South African Government News Agency</i>, 13 September, viewed 15 July 2010, <a href="https://www.sanews.gov.za/south-africa/labour-pushes-improved-occupational-safety-regulations">https://www.sanews.gov.za/south-africa/labour-pushes-improved-occupational-safety-regulations</a>. In this post it is stated that renovations took place after the 2017 prohibition notice was served, which was only withdrawn after completion of construction work.'
},

{
    no: 13,
    note: 'Ibid.'
},

{
    no: 14,
    note: `These include: <i>Corner House</i> housing MEC Mamabolo's department, <i>Imbumba House</i> where provincial treasury is located, <i>Thusanong Building</i> housing social development, the <i>Old Reserve Bank</i>, the <i>Absa Building</i>, and two buildings at <i>Sage centre</i> – all located within the city centre. Dludla, S 2018, ‘#JoburgFire: Government to fast-track relocation from burnt building’, <i>IOL</i>, 06 September, viewed 14 May 2020, <a href=""https://www.iol.co.za/news/south-africa/gauteng/joburgfire-government-to-fast-track-relocation-from-burnt-building-16925973">https://www.iol.co.za/news/south-africa/gauteng/joburgfire-government-to-fast-track-relocation-from-burnt-building-16925973</a>.`
},

{
    no: 15,
    note: 'Gauteng Department of Infrastructure Development 2018, ‘MEC Jacob Mamabolo briefing members of the media following the fire that erupted at the Bank of Lisbon Building which houses the Department of Health, Human Settlements and Coopertative…’, facebook post and video, 05 September, viewed 20 May 2020,   <a href=""https://www.facebook.com/watch/?v=294409161148137">https://www.facebook.com/watch/?v=294409161148137</a>. See also: Poloko Tau, ‘Building where fatal fire started was bad, but it was not the worse’. 06 September 2018. <i>Sunday Times</i>. <a href="https://www.timeslive.co.za/news/south-africa/2018-09-06-building-where-fatal-fire-started-was-bad-but-it-was-not-the-worst/">https://www.timeslive.co.za/news/south-africa/2018-09-06-building-where-fatal-fire-started-was-bad-but-it-was-not-the-worst/</a>.'
},

{
    no: 16,
    note: `‘Joburg building fire: MEC must not lie – DENOSA’ 2018, <i>Politicsweb</i>, 06 September, viewed 20 May 2020, <a href="https://www.politicsweb.co.za/news-and-analysis/joburg-building-fire-the-mec-must-not-lie--denosa">https://www.politicsweb.co.za/news-and-analysis/joburg-building-fire-the-mec-must-not-lie--denosa</a>.  See also: 
    Maphanga C 2018, ‘Joburg building fire: ‘The MEC must not lie,’ DENOSA charges’,  <i>News24</i>, 06 September, viewed 10 June 2020, <a href="https://www.news24.com/news24/southafrica/news/joburg-building-fire-the-mec-must-not-lie-denosa-charges-20180906">https://www.news24.com/news24/southafrica/news/joburg-building-fire-the-mec-must-not-lie-denosa-charges-20180906</a>.
    `
},

{
    no: 17,
    note: 'Madia T 2018, ‘Makhura under the spotlight again – this time for deadly Joburg blaze’, <i>News24</i>, 07 September, viewed 01 July 2020, <a href="https://www.news24.com/news24/southafrica/news/makhura-under-the-spotlight-again-this-time-for-deadly-joburg-blaze-20180907">https://www.news24.com/news24/southafrica/news/makhura-under-the-spotlight-again-this-time-for-deadly-joburg-blaze-20180907</a>. Within less than a year, office workers will raise concerns about compromised working conditions in their new location, see: Monama T and Mashigo L 2019, ‘Bank of Lisbon fire: One year on’,  <i>IOL</i>, 05 September, viewed 01 April 2020, <a href="https://www.iol.co.za/the-star/news/bank-of-lisbon-fire-one-year-on-31884552">https://www.iol.co.za/the-star/news/bank-of-lisbon-fire-one-year-on-31884552</a>.'
},

{
    no: 18,
    note: 'My italics. Dludla S 2018, ‘#JoburgFire: Government to fast-track relocation from burnt building’, <i>IOL</i>, 06 September, viewed 01 July 2020, <a href="https://www.iol.co.za/news/south-africa/gauteng/joburgfire-government-to-fast-track-relocation-from-burnt-building-16925973">https://www.iol.co.za/news/south-africa/gauteng/joburgfire-government-to-fast-track-relocation-from-burnt-building-16925973</a>.  Also see: ‘City of Joburg has seven operational fire engines’ 2019, <i>Southern Courier</i>, 10 July, viewed 01 July 2020, <a href="https://southerncourier.co.za/168211/city-of-joburg-has-seven-operational-fire-engines/">https://southerncourier.co.za/168211/city-of-joburg-has-seven-operational-fire-engines/<a>.'
},

{
    no: 19,
    note: 'Mashaba H 2018, ‘Speech by executive Mayor Herman Mashaba: Final salute to 3 of Joburg’s brave firefighters’, <i>Joburg</i>, viewed 20 July 2020, <a href="https://www.joburg.org.za/media_/MediaStatements/Pages/2018%20Press%20Releases/Final-salute-to-3-of-Joburg%E2%80%99s-Brave-Firefighters.aspx">https://www.joburg.org.za/media_/MediaStatements/Pages/2018%20Press%20Releases/Final-salute-to-3-of-Joburg%E2%80%99s-Brave-Firefighters.aspx</a>.'
},

{
    no: 20,
    note: 'Dlamini P 2018, ‘Health Department’s serious legal documents go up in smoke in Joburg’s fatal fire’, <i>Sowetan Live</i>, 06 September, viewed 01 July 2020, <a href="https://www.sowetanlive.co.za/news/south-africa/2018-09-06-health-departments-serious-legal-documents-go-up-in-smoke-in-joburgs-fatal-fire/">https://www.sowetanlive.co.za/news/south-africa/2018-09-06-health-departments-serious-legal-documents-go-up-in-smoke-in-joburgs-fatal-fire/</a>.'
},

{
    no: 21,
    note: 'Interview with Azania Mosaka. <i>‘Firefighters who survived Bank of Lisbon fire share their story’</i> 2018, <i>The Azania Mosaka Show</i>, radio programme, 702, Cape Town, 15 November, viewed 02 March 2020, <a href="http://www.702.co.za/articles/327264/listen-firefighter-who-survived-bank-of-lisbon-fire-share-their-story">http://www.702.co.za/articles/327264/listen-firefighter-who-survived-bank-of-lisbon-fire-share-their-story</a>.'
},

{
    no: 22,
    note: 'Shange N 2018, ‘Timeline to disaster: What happened on the day 3 Joburg firefighters died’, <i>Sunday Times</i>, 28 September, viewed 01 July 2020, <a href="https://www.timeslive.co.za/news/south-africa/2018-09-28-timeline-to-disaster-what-happened-on-the-day-3-joburg-firefighters-died/">https://www.timeslive.co.za/news/south-africa/2018-09-28-timeline-to-disaster-what-happened-on-the-day-3-joburg-firefighters-died/</a>.'
},

{
    no: 23,
    note: '‘Signs of backdraft and how firefighters can identify them’, 2020, <i>FireRescue1</i>, 20 July, viewed 15 July 2020,  <a href="https://www.firerescue1.com/firefighter-safety/articles/signs-of-backdraft-and-how-firefighters-can-identify-them-OsPN3QF9mh7Gw2Lj/">https://www.firerescue1.com/firefighter-safety/articles/signs-of-backdraft-and-how-firefighters-can-identify-them-OsPN3QF9mh7Gw2Lj/</a>.'
},

{
    no: 24,
    note: 'Ibid.'
},

{
    no: 25,
    note: '‘Firefighters who survived Bank of Lisbon fire share their story’.2018, <i>The Azania Mosaka Show</i>, radio programme, 702, Cape Town, 15 November, viewed 02 March 2020, <a href="http://www.702.co.za/articles/327264/listen-firefighter-who-survived-bank-of-lisbon-fire-share-their-story">http://www.702.co.za/articles/327264/listen-firefighter-who-survived-bank-of-lisbon-fire-share-their-story</a>.'
},

{
    no: 26,
    note: 'Ibid.'
},

{
    no: 27,
    note: 'Gous, N 2018, ‘Joburg firefighters to break ‘respectful silence’ and speak our on colleagues’ death’,  <i>Sunday Times</i>, 27 September, viewed 01 July 2020, <a href="https://www.timeslive.co.za/news/south-africa/2018-09-27-joburg-firefighters-to-break-respectful-silence-and-speak-out-on-colleagues-deaths/">https://www.timeslive.co.za/news/south-africa/2018-09-27-joburg-firefighters-to-break-respectful-silence-and-speak-out-on-colleagues-deaths/</a>.'
},

{
    no: 28,
    note: '‘Call for probe after Joburg government building blaze leaves 3 firefighters dead’ 2018, <i>Breakfast with Bongani Bingwa</i>, radio programme, 702, 06 September, viewed 20 May 2019, ,<a href="http://www.702.co.za/articles/318156/call-for-probe-after-joburg-government-building-blaze-leaves-3-firefighters-dead">http://www.702.co.za/articles/318156/call-for-probe-after-joburg-government-building-blaze-leaves-3-firefighters-dead</a>.'
},

{
    no: 29,
    note: 'Arthur Mqwa, acting head of the City of Joburg Emergency Medical Service. ‘Mashaba calls for reinforcments to deal with Joburg fire’ 2019, <i>Africa News 24-7<i>, 06 September, viewed 01 July 2020, <a href="https://www.africanews24-7.co.za/index.php/southafricaforever/fire-still-rages-johannesburg-govt-building-firefighters-take-break/">https://www.africanews24-7.co.za/index.php/southafricaforever/fire-still-rages-johannesburg-govt-building-firefighters-take-break/</a>.'
},

{
    no: 30,
    note: 'Mashaba, S 2018, ‘#JoburgFire: building may be demolished due to serious structural damage, <i>IOL</i>, 20 December, viewed 27 December 2018, <a href="https://www.iol.co.za/the-star/news/joburgfire-building-may-be-demolished-due-to-serious-structural-damage-18571253">https://www.iol.co.za/the-star/news/joburgfire-building-may-be-demolished-due-to-serious-structural-damage-18571253</a>. eNCA Morning News Today, <i>More reaction from the Joburg building fire</i>, YouTube, viewed 10 January 2020, <a href"https://www.youtube.com/watch?v=jR9iKiFaTEA">https://www.youtube.com/watch?v=jR9iKiFaTEA</a>.'
},

{
    no: 31,
    note: '‘Joburg Firefighter – We are broken’ 2018, <i>Eyewitness News</i>, 13 September, posted video, viewed 10 May 2020,   <a href="https://www.msn.com/en-za/news/featured/joburg-firefighter-were-broken/vi-BBNguol">https://www.msn.com/en-za/news/featured/joburg-firefighter-were-broken/vi-BBNguol</a>.'
},

{
    no: 32,
    note: 'Lack of maintenance and health and safety standards did not only apply to buildings owned by the provincial governments in the city centre alone. The headquarters of the Health Department at the <i>Civitas</i> building in Tshwane was declared equally ‘unfit for habitation’. A year later it emerges that ‘none of the hospitals in the province full comply with the Occupational Health and Safety Act, with <i>Bheki Mlangeni</i> in Soweto ‘being the worst’. Monama T 2019, ‘Gauteng has spent R 2.3m on burnt Bank of Lisbon building since 2018’,  <i>IOL</i>, 11 September, viewed 03 March 2020, <a href="https://www.iol.co.za/the-star/news/gauteng-has-spent-r23m-on-burnt-bank-of-lisbon-building-since-2018-32797611">https://www.iol.co.za/the-star/news/gauteng-has-spent-r23m-on-burnt-bank-of-lisbon-building-since-2018-32797611</a>.'
},

{
    no: 33,
    note: 'Gous N 2018, ‘Joburg firefighters to break ‘respectful silence’ and speak our on colleagues’ death’, <i>Sunday Times</i>, 27 September, viewed 01 February 2020, <a href="https://www.timeslive.co.za/news/south-africa/2018-09-27-joburg-firefighters-to-break-respectful-silence-and-speak-out-on-colleagues-deaths/">https://www.timeslive.co.za/news/south-africa/2018-09-27-joburg-firefighters-to-break-respectful-silence-and-speak-out-on-colleagues-deaths/</a>.'
},

{
    no: 34,
    note: 'Ngqakamaba, S 2018, ‘DA lays criminal charges against Gauteng MECs over Joburg building fire’, <i>News24</i>, 18 September, viewed 10  Junw 2020, <a href="https://www.news24.com/news24/southafrica/news/da-lays-criminal-charges-against-gauteng-mecs-over-joburg-buiding-fire-20180918">https://www.news24.com/news24/southafrica/news/da-lays-criminal-charges-against-gauteng-mecs-over-joburg-buiding-fire-20180918</a>.'
},

{
    no: 35,
    note: 'Lindique, M. 2019, ‘Firefighters who battled Lisbon building blaze honoured’, <i>IOL</i>, 28 January, viewed 10 May 2020,  <a href="https://ewn.co.za/2019/01/28/firefighters-who-battled-lisbon-building-blaze-honoured">https://ewn.co.za/2019/01/28/firefighters-who-battled-lisbon-building-blaze-honoured</a>.'
},

{
    no: 36,
    note: 'Evans, J 2019, ‘Public Protector asked to probe fatal Bank of Lisbon building blaze’, <i>News24</i>, 21 February, viewed 10 May 2020, <a href="https://www.news24.com/news24/southafrica/news/public-protector-asked-to-probe-fatal-bank-of-lisbon-building-blaze-20190221">https://www.news24.com/news24/southafrica/news/public-protector-asked-to-probe-fatal-bank-of-lisbon-building-blaze-20190221</a>.'
},

{
    no: 37,
    note: 'Phone conversation with Rapulane Monageng, May 2020. '
},

{
    no: 38,
    note: '  At a commemoration a year after the fire, a movable plaque was unveiled by the newly appointed MEC of health Dr Bandile Masuku in honour of  ‘those who lost their lives while fighting the blaze’. More than 100 workers and members of National Education, Health and Allied Workers’ Union (NEHAWU) protested the commemoration as a PR stunt and demanded for a forensic report to be released, calling for the Head of Department Prof Mac Mukhele to be held accountable. Ngqakamba, S 2019, ‘One year on: Firefighters who died in Bank of Lisbon fire are remembered’, <i>News24</i>, 05 September 2019, viewed 10 May 2020, <a href="https://www.news24.com/news24/southafrica/news/nehawu-affiliated-workers-call-for-release-of-forensic-report-on-bank-of-lisbon-fire-20190905">https://www.news24.com/news24/southafrica/news/nehawu-affiliated-workers-call-for-release-of-forensic-report-on-bank-of-lisbon-fire-20190905</a>. <a href="https://www.news24.com/news24/southafrica/news/one-year-on-firefighters-who-died-in-bank-of-lisbon-fire-are-remembered-20190905">https://www.news24.com/news24/southafrica/news/one-year-on-firefighters-who-died-in-bank-of-lisbon-fire-are-remembered-20190905</a>.'
},

{
    no: 39,
    note: 'Shange N 2018, ‘They would be alive if the building was compliant’ – Firefighters reveal details of fire’, <i>Sunday Times</i>, 13 September, viewed 20 April 2020, <a href="https://www.timeslive.co.za/news/south-africa/2018-09-13-watch-they-would-be-alive-if-the-building-was-compliant-firefighters-reveal-details-of-fire/">https://www.timeslive.co.za/news/south-africa/2018-09-13-watch-they-would-be-alive-if-the-building-was-compliant-firefighters-reveal-details-of-fire/</a>.'
},

{
    no: 40,
    note: 'Massey C,  ‘The Impact of Air Movement on High-Rise Commercial Fires’, <i>Massey Disaster Planning</i>, viewed 20 May 2020, <a href="https://www.disasterplanning.com/media/articles/impact-air-movement-high-rise-commercial-fires">https://www.disasterplanning.com/media/articles/impact-air-movement-high-rise-commercial-fires</a>. '
},

{
    no: 41,
    note: 'Lentini J 2012, ‘Fire Patterns and Their Interpretation’, January 2012. <i>Research Gate</i>, doi: <a href="10.1016/B978-0-12-382165.00213-0">10.1016/B978-0-12-382165.00213-0</a>'
},

{
    no: 42,
    note: `Monama T 2019, ‘Gauteng has spent 2.3m on burnt Bank of Lisbon building since 2018’, <i>IOL</i>, 11 September, viewed 10 May 2020, 
    <a href="https://www.iol.co.za/the-star/news/gauteng-has-spent-r23m-on-burnt-bank-of-lisbon-building-since-2018-32797611">https://www.iol.co.za/the-star/news/gauteng-has-spent-r23m-on-burnt-bank-of-lisbon-building-since-2018-32797611</a>.
    `
},

{
    no: 43,
    note: `‘106-m high Bank of Lisbon implosion is one of the most complex projects ever undertaken by Jet Demolition’ 2019, <i>Mining News</i>, 01 December, viewed 20 December 2019, 
    <a href="https://www.miningsafety.co.za/newscontent/10220/108-m-high-bank-of-lisbon-implosion-is-one-of-the-most-complex-projects-ever-undertaken-by-jet-demolition">https://www.miningsafety.co.za/newscontent/10220/108-m-high-bank-of-lisbon-implosion-is-one-of-the-most-complex-projects-ever-undertaken-by-jet-demolition</a>.`
    
},

{
    no: 44,
    note: 'Whatsapp conversation with Jet Demolition site manager, May 2020. See also: Kajee A 2019, ‘R 140 million was set aside for Bank of Lisbon demolition’, <i>Eyewitness News</i>, November, viewed 20 January 2020, <a href="https://ewn.co.za/2019/11/25/r140-million-was-set-aside-for-bank-of-lisbon-demolition">https://ewn.co.za/2019/11/25/r140-million-was-set-aside-for-bank-of-lisbon-demolition</a>.'
},

{
    no: 45,
    note: 'Gordillo G 2015, ‘Empire on Trial: The Forensic Appearance of Truth’, <i>Environment and Planning D: Society and Space</i>, volume 33, pp 382 – 388, viewed 10 June 2020, doi:<a href="10.1068/d3302rev">10.1068/d3302rev</a>'
},

]

const title = document.querySelector('#footnoteTitle');
const note = document.querySelector('.footnote-content');


document.body.addEventListener('click', (e) => {
    if(e.target.tagName === "SUP"){
        let currNote = parseInt(e.target.innerText) - 1;
        openNote(currNote);
    }
})


// FUNCTION TO SHOW MODAL
const openNote = (currNote) => {
    title.innerText = `Footnote #` + (currNote + 1);
    note.innerHTML = notes[currNote].note;
    $('#footnoteModal').modal('show');
}
