import React from "react";
import Card from './Card'

const CardGrid = () => {
  return (
    <div className='grid'>
    <Card webLink='https://swe.org/' imgLink='https://se-images.campuslabs.com/clink/images/4428cf3e-826e-4fcb-b958-be82a1bf6b18ae25c9d2-1730-4249-8044-c4334e4b02c7.JPG?preset=med-sq' imgDescription='SWE logo' description='Society of Women Engineers'/>
    <Card webLink='https://girlswhocode.com/' imgLink='https://th.bing.com/th/id/OIP.ghRLVQ8WuP0nOw6yeq7rSQHaD4?r=0&w=1200&h=630&rs=1&pid=ImgDetMain' imgDescription='Girls Who Code Logo' description='Girls Who Code'/>
    <Card webLink='https://anitab.org/' imgLink='https://onereq.com/wp-content/uploads/2020/07/anitaB_logo.png' imgDescription='Logo of Anita Borg Institute' description='Anita Borg Institute'/>
    <Card webLink='https://women.acm.org/' imgLink='https://th.bing.com/th/id/OIP.rm4cRHVOvUs1GTH7tavDOgHaEo?r=0&rs=1&pid=ImgDetMain' imgDescription='ACM-W Logo' description='ACM-W'/>
    <Card webLink='https://wie.ieee.org/' imgLink='https://ieee.ae/wp-content/uploads/sites/158/2021/07/WIE_purple_pms526.png' imgDescription='IEEE Women in Engineering logo' description='IEEE Women in Engineering'/>
    <Card webLink='https://rewritingthecode.org/'imgLink='https://alfacharlie.co/wp-content/uploads/2022/10/Rewriting-the-Code-Logo-Design.jpg' imgDescription='Rewriting the Code Logo' description='Rewriting the Code'/>
    <Card webLink='https://www.codepath.org/courses' imgLink='https://mma.prnewswire.com/media/1800392/codepath_1x1_solid_dark_Logo.jpg?p=publish' imgDescription='CodePath Logo' description='CodePath'/>
    <Card webLink='https://girldevelopit.com/' imgLink='https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1416993852/mdqpcqunqezk1k3wnet1.png' imgDescription='Girls Develop It Logo' description='Girls Develop It'/>
    <Card webLink='https://ncwit.org/' imgLink='https://vepimg.b8cdn.com/uploads/vjfnew/9076/uploads/vjf/content/misc/1678194885logo.png' imgDescription='NCWIT Logo' description='National Center for Women in Technology'/>
    <Card webLink='https://ai-4-all.org/' imgLink='https://www.mdc.edu/entec/img/aiforall-logo.jpg' imgDescription='AI4ALL Logo' description='AI4ALL'/>
    <Card webLink='https://www.wicys.org/' imgLink='https://www.caecommunity.org/sites/default/files/WiCyS%20Logo5_0.png' imgDescription='WiCyS Logo' description='Women in Cybersecurity'/>
    <Card webLink='https://www.wicys.org/' imgLink='https://womenwhocode.com/wp-content/uploads/2025/01/cropped-women_who_code_site_identity2.png' imgDescription='Women Who Code Logo' description='Women Who Code'/>
    </div>
  )
}

export default CardGrid;