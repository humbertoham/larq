"use client"
import Tren from "./tren";

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';


export default function Develop() {
    const pagination = {
        clickable: true,
        renderBullet: function (index:any, className:String) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      };
    
    return (
      <>
        
        <section className="bg-white " id="acerca">
        
    <div className="gap-16 items-center px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-1 lg:py-16 lg:px-6">
        
        <div className="font-light text-gray-500 sm:text-lg ">
            <h2 className="mb-4 text-4xl text-center tracking-tight font-extrabold text-gray-900 ">Real Estate</h2>
            <h2 className="mb-4 tracking-tight font-extrabold text-gray-900 ">Certeza jurídica</h2>
            <h2 className="mb-4 tracking-tight font-extrabold text-gray-900 ">Financiamientos desde 36 hasta 120 MESES SIN INTERESES</h2>
            <h2 className="mb-4 tracking-tight font-extrabold text-gray-900 ">Amenidades</h2>
            <h2 className="mb-4 tracking-tight font-extrabold text-gray-900 ">Zona de tren maya</h2>
            <h2 className="mb-4 tracking-tight font-extrabold text-gray-900 ">Sistema de referidos</h2>
            <h2 className="mb-4 text-2xl tracking-tight font-extrabold text-gray-900 ">Desarrollos en Mérida</h2>
            <p className="mb-4">Invertir en terrenos en Mérida presenta una oportunidad excepcional. La ciudad ha experimentado un rápido crecimiento económico y demográfico, respaldado por su seguridad, calidad de vida y atractivo cultural. El aumento del turismo y la inversión en infraestructuras hacen de Mérida un mercado inmobiliario prometedor. La creciente demanda de propiedades y la planificación urbana sostenible indican un potencial de valorización a largo plazo. En resumen, Mérida ofrece un entorno propicio para inversiones inmobiliarias exitosas.</p>
            <h2 className="mb-4 tracking-tight font-extrabold text-gray-900 ">Mensualidades desde $ 3,598 MXN</h2>
        </div>
        <div className="grid grid-cols-1 gap-4">
        <Swiper
       
       pagination={pagination} modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><div className="gap-16 items-center pb-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        
        <div className="font-light text-left text-gray-500 sm:text-lg ">
                <h2 className="my-4  tracking-tight font-extrabold text-gray-900  ">Ciudad Colorin</h2>
                <p className="mb-4">La primera Smart City de Mérida </p>
                <p className="mb-4">•	Áreas deportivas y culturales</p>
                <p className="mb-4">•	Servicios de seguridad, salud y transporte</p>
                <p className="mb-4">•	Terrenos residenciales desde 300m2.</p>
                <p className="mb-4">•	Calles pavimentadas, banquetas y
alumbrado público. Servicios de agua,
drenaje y electricidad a pie de terreno.</p>
                <p className="mb-4">
•	11 distritos con terrenos en privadas
y abiertas.</p>
                <p className="mb-4">•	Zona comercial y de servicios.</p>
                <p className="mb-4">
•	Zona para desarrollos de alta densidad
como departamentos y townhouses
</p>
            </div>
            <div className="grid grid-cols-1 gap-4 mt-8">
            <img src="./images/colorin.jpeg" className="ban" />
    
            </div>
            
        </div>
        </SwiperSlide>
        <SwiperSlide><div className="gap-16 items-center pb-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        
        <div className="font-light text-left text-gray-500 sm:text-lg ">
                <h2 className="my-4  tracking-tight font-extrabold text-gray-900  ">Paseo Colorin</h2>
                <p className="mb-4">Ubicación estratégica a solo 14 minutos de Chicxulub puerto, 24 minutos de Progreso. Disfruten de amenidades como casa club, canchas de tenis, fútbol, teatro, ciclovía, senderos y más. ¡Aprovechen nuestro sistema de referidos</p>
                <p className="mb-4">•	Terrenos tipo 300m2</p>
               
                <p className="mb-4">•	Electricidad a pie de terreno</p>
                <p className="mb-4">•	Calles pavimentadas</p>
                <p className="mb-4">•	Parque central dentro de la ciudad</p>
                <p className="mb-4">•	Amenidades</p>
               
               
            </div>
            <div className="grid grid-cols-1 gap-4 mt-8">
            <img src="./images/paseo.jpg" className="ban" />
    
            </div>
            
        </div></SwiperSlide>
        <SwiperSlide><div className="gap-16 items-center pb-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        
        <div className="font-light text-left text-gray-500 sm:text-lg ">
                <h2 className="my-4  tracking-tight font-extrabold text-gray-900  ">Catalina Haciendas</h2>
                <p className="mb-4">247 terrenos semiurbanizados que están listos para ofrecer un ambiente de armonía familiar y social, en uno de los puntos más emblemáticos del estado de Yucatán.</p>
                <p className="mb-4">•	Terrenos Semiurbanizados</p>
                <p className="mb-4">•	Luz a pie de terreno</p>
                <p className="mb-4">•	Calles blancas y mojoneras</p>
               
                <p className="mb-4">•	Amenidades</p>
               
               
            </div>
            <div className="grid grid-cols-1 gap-4 mt-8">
            <img src="./images/catalina.jpg" className="ban" />
    
            </div>
            
        </div></SwiperSlide>
        <SwiperSlide><div className="gap-16 items-center pb-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        
        <div className="font-light text-left text-gray-500 sm:text-lg ">
                <h2 className="my-4  tracking-tight font-extrabold text-gray-900  ">Pacal Industrial</h2>
                <p className="mb-4">Terrenos en una de las zonas de mayor crecimiento industrial
donde grandes empresas como:
Grupo Modelo, Crown Park, Grupo Kekén,
ya cuentan con la infraestructura necesaria y por eso
se ha convertido en el polo de mayor crecimiento del estado.
</p>
               
            </div>
            <div className="grid grid-cols-1 gap-4 mt-8">
              
            <img src="./images/pacal.jpeg" className="ban" />
            
            </div>
            
            
        </div></SwiperSlide>
        <SwiperSlide><div className="gap-16 items-center pb-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        
        <div className="font-light text-left text-gray-500 sm:text-lg ">
                <h2 className="my-4  tracking-tight font-extrabold text-gray-900  ">San Gabriel Yucatan</h2>
                <p className="mb-4">•	Terreno tipo (350 m2)
San Gabriel Yucatán cuenta con terrenos tipo de 350 m2 (10
metros de frente y 35 metros de fondo).</p>
                <p className="mb-4">• Incluye el servicio de energía eléctrica a pie de lote.</p>
                <p className="mb-4">
• Se entregará con las plantas, árboles y cualquier otro
tipo de naturaleza que haya crecido en él. Se promueve la
conservación e integración del proyecto arquitectónico a la
vegetación existente.</p>
                <p className="mb-4">

•	Amenidades
</p>
               
            </div>
            <div className="grid grid-cols-1 gap-4 mt-8">
            <img src="./images/sangabriel.jpeg" className="ban" />
    
            </div>
            
        </div></SwiperSlide>
        
      
      </Swiper>
        </div>
    </div>
    <div className="gap-16 items-center pb-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        
    <div className="font-light text-gray-500 sm:text-lg ">
            <h2 className="my-4  text-2xl tracking-tight font-extrabold text-gray-900  ">Desarrollos en Cancún</h2>
            <p className="mb-4"> Invertir en terrenos en Cancún puede ser una decisión sólida por diversas razones. La creciente demanda turística en la zona, la belleza natural, y el desarrollo constante de infraestructuras son factores clave. Además, la estabilidad económica de México y el atractivo turístico de Cancún sugieren un potencial de crecimiento a largo plazo, convirtiendo esta inversión en una oportunidad atractiva para obtener rendimientos significativos.</p>
            <h2 className="mb-4 tracking-tight font-extrabold text-gray-900 ">Rango de Precios:</h2>
            <p className="mb-4">Desde opciones asequibles a partir de $200,000 hasta inversiones más significativas de $15,000,000, nuestro rango de precios abarca todas las posibilidades, permitiéndote encontrar la propiedad que se ajuste perfectamente a tu presupuesto y expectativas.</p>
            <br/>
            <a href="https://api.whatsapp.com/send/?phone=%2B527551441259" target="_blank" className="bg-transparent hover:bg-black text-black font-semibold hover:text-white m-auto py-2 px-4 border border-black hover:border-transparent rounded">Contáctanos</a>
        </div>
        <div className="grid grid-cols-1 gap-4 mt-8">
        <img src="./images/cancun2.jpg" className="ban" />

        </div>
        
    </div>
    <Tren/>
    <div className="gap-16 items-center px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-1 lg:py-16 lg:px-6">
        
        <div className="font-light text-gray-500 sm:text-lg ">
                <h2 className="my-4  text-2xl tracking-tight font-extrabold text-gray-900  ">Propiedades en Ixtapa y Zihuatanajo</h2>
                <p className="mb-4">
Descubre la emocionante oportunidad de inversión en el paraíso costero de Ixtapa y Zihuatanejo, donde el encanto del Pacífico Mexicano se combina con un mercado inmobiliario vibrante. En este idílico destino, te presentamos una cartera diversa que abarca desde casas con vista al mar hasta terrenos y lotes para construir tu proyecto de ensueño.</p>
               
            </div>
            <div className="grid grid-cols-1 gap-4">
            <Swiper
       
       pagination={pagination} modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><div className="gap-16 items-center pb-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-1 lg:py-16 lg:px-6">
        
        <div className="font-light text-left text-gray-500 sm:text-lg ">
                <h2 className="my-4  tracking-tight font-extrabold text-gray-900  ">Casa Campo de Golf Ixtapa $3,500,000.00 MXN</h2>
                <p className="mb-4">•	Casa en Golondrinas Ixtapa</p>
                <p className="mb-4">•	3 recamaras</p>
                <p className="mb-4">•	Alberca compartida</p>
                <p className="mb-4">•	Patio de servicio</p>
                <p className="mb-4">•	3 Baños</p>
                <p className="mb-4">
                •	Comedor</p>
                <p className="mb-4">•	Zona comercial y de servicios.</p>
                <p className="mb-4">
                •	Sala
</p>
<p className="mb-4">•	Áreas verdes</p>
<p className="mb-4">•	En Ixtapa campo de golf</p>
<p className="mb-4">
•	Estacionamiento
</p>
            </div>
            <div className="grid grid-cols-1 gap-4 mt-8">
            <img src="./images/casagolfo.jpeg" className="ban" />
    
            </div>
            
        </div>
        </SwiperSlide>
        <SwiperSlide><div className="gap-16 items-center pb-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-1 lg:py-16 lg:px-6">
        
        <div className="font-light text-left text-gray-500 sm:text-lg ">
                <h2 className="my-4  tracking-tight font-extrabold text-gray-900  ">Casa Golondrinas Ixtapa $7,500,000 MXN</h2>
                <p className="mb-4">•	1000 Metros cuadrados de terreno</p>
                <p className="mb-4">•	290 Metros de construcción</p>
               
                <p className="mb-4">•	4 Recamaras con baño</p>
                <p className="mb-4">•	Estudio o cuarto de tv</p>
                <p className="mb-4">•	Medio baño</p>
                <p className="mb-4">•	Amenidades</p>
                <p className="mb-4">•	3 Estacionamientos techados</p>
                <p className="mb-4">•	Sala, comedor, cocina</p>
                <p className="mb-4">•	Alberca grande</p>
                <p className="mb-4">•	Pérgola con comedor, tarja y asador</p>
                <p className="mb-4">•	Frente al campo de golf 1 nivel, 4 recamaras, 1000 metros cuadrados, vista frente al lago.</p>
            
               
               
            </div>
            <div className="grid grid-cols-1 gap-4 mt-8">
            <img src="./images/golondrinas.jpeg" className="ban" />
    
            </div>
            
        </div></SwiperSlide>
        <SwiperSlide><div className="gap-16 items-center pb-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-1 lg:py-16 lg:px-6">
        
        <div className="font-light text-left text-gray-500 sm:text-lg ">
                <h2 className="my-4  tracking-tight font-extrabold text-gray-900  ">Lotes La Alameda Centro de Zihuatanejo</h2>
                <p className="mb-4">
Lotes con vista al mar en el centro de Zihuatanejo, propiedad privada. Lotes desde 35 m² hasta 120 m².</p>
                <p className="mb-4">• Sistema de apartado</p>
                <p className="mb-4">• Financiamiento a 36 meses sin intereses</p>
               
                <p className="mb-4">• Enganche de $200,000 pesos</p>
               
               
            </div>
            <div className="grid grid-cols-1 gap-4 mt-8">
            <img src="./images/alameda.jpeg" className="ban" />
    
            </div>
            
        </div></SwiperSlide>
        <SwiperSlide><div className="gap-16 items-center pb-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-1 lg:py-16 lg:px-6">
        
        <div className="font-light text-left text-gray-500 sm:text-lg ">
                <h2 className="my-4  tracking-tight font-extrabold text-gray-900  ">Terrenos Pericos Ixtapa $3,000,000 MXN</h2>
                <p className="mb-4">
                Terreno en zona residencial de Ixtapa Zihuatanejo, 850 metros cuadrados.
</p>
<p className="mb-4">
• Certeza jurídica.
</p>
<p className="mb-4">
  
• Documentos en orden.
</p>
    
            </div>
            <div className="grid grid-cols-1 gap-4 mt-8">
              
            <img src="./images/pericos.jpeg" className="ban" />
            
            </div>
            
            
        </div></SwiperSlide>
        <SwiperSlide><div className="gap-16 items-center pb-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-1 lg:py-16 lg:px-6">
        
        <div className="font-light text-left text-gray-500 sm:text-lg ">
                <h2 className="my-4  tracking-tight font-extrabold text-gray-900  ">Casa Residencial Ixtapa $8,000,000 MXN</h2>
                <p className="mb-4">
                •	Casa principal y casa de visitas</p> <p className="mb-4">
•	Alberca</p> <p className="mb-4">
•	3 Recamaras</p> <p className="mb-4">
•	4 Baños </p> <p className="mb-4">
•	Sala de estar</p> <p className="mb-4">
•	Comedor</p> <p className="mb-4">
•	Cocina</p> <p className="mb-4">
•	Cisterna </p> <p className="mb-4">
•	Cochera para 3 coches</p>

         
               
            </div>
            <div className="grid grid-cols-1 gap-4 mt-8">
            <img src="./images/residencial.jpeg" className="ban" />
    
            </div>
            
        </div></SwiperSlide>
        <SwiperSlide><div className="gap-16 items-center pb-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-1 lg:py-16 lg:px-6">
        
        <div className="font-light text-left text-gray-500 sm:text-lg ">
                <h2 className="my-4  tracking-tight font-extrabold text-gray-900  ">Departamento Pelicanos Ixtapa $1,350,000 MXN</h2>
                <p className="mb-4">Ubicación: 1 Minuto de la zona hotelera de Ixtapa.</p><p className="mb-4">
•	Tres recamaras</p><p className="mb-4">
•	Sala de estar</p><p className="mb-4">
•	Comedor </p><p className="mb-4">
•	Cocina </p><p className="mb-4">
•	1 baño completo</p><p className="mb-4">
•	Patio de servicio
</p>
         
               
            </div>
            <div className="grid grid-cols-1 gap-4 mt-8">
            <img src="./images/pelicanos.jpeg" className="ban" />
    
            </div>
            
        </div></SwiperSlide>
        <SwiperSlide><div className="gap-16 items-center pb-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-1 lg:py-16 lg:px-6">
        
        <div className="font-light text-left text-gray-500 sm:text-lg ">
                <h2 className="my-4  tracking-tight font-extrabold text-gray-900  ">Terreno en Playa Larga Zihuatanejo $4,400,000 MXN</h2>
                <p className="mb-4">

Frente a playa</p><p className="mb-4">
*450 Mts2.</p><p className="mb-4">
*15 De frente de playa.</p><p className="mb-4">
*30 De largo </p><p className="mb-4">
•	Tiene 300 Mts de excedente.</p><p className="mb-4">
•	Título de propiedad.</p><p className="mb-4">
•	Documentos en orden.
</p>
         
               
            </div>
            <div className="grid grid-cols-1 gap-4 mt-8">
            <img src="./images/zihuatanejo.jpeg" className="ban" />
    
            </div>
            
        </div></SwiperSlide>
        <SwiperSlide><div className="gap-16 items-center pb-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-1 lg:py-16 lg:px-6">
        
        <div className="font-light text-left text-gray-500 sm:text-lg ">
                <h2 className="my-4  tracking-tight font-extrabold text-gray-900  ">Lote en playa Las Pozas Zihuatanejo $3,500,000.00 MXN</h2>
                <p className="mb-4">Frente a playa</p><p className="mb-4">
Atrás del Aeropuerto internacional de Ixtapa Zihuatanejo</p><p className="mb-4">
• 700 Mts2</p><p className="mb-4">
• 10 De frente de playa</p><p className="mb-4">
• 70 De largo 
</p>
         
               
            </div>
            <div className="grid grid-cols-1 gap-4 mt-8">
            <img src="./images/pozas.jpeg" className="ban" />
    
            </div>
            
        </div></SwiperSlide>
        <SwiperSlide><div className="gap-16 items-center pb-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-1 lg:py-16 lg:px-6">
        
        <div className="font-light text-left text-gray-500 sm:text-lg ">
                <h2 className="my-4  tracking-tight font-extrabold text-gray-900  ">Preventa de Departamentos Centro Zihuatanejo $1,750,000.00 MXN</h2>
                <p className="mb-4">
Ubicados en la colonia Cuauhtemoc , a 3 minutos del muelle de Zihuatanejo (1 km)</p>
<p className="mb-4">
•	2 habitaciones con AA (inverter)</p> <p className="mb-4">
•	Sala ( Con aire acondicionado)</p> <p className="mb-4">
•	Ventiladores de techo en cuartos y sala.</p> <p className="mb-4">
•	Cocina </p> <p className="mb-4">
•	Comedor</p> <p className="mb-4">
•	2 baños completos </p> <p className="mb-4">
•	Cuarto de lavado</p> <p className="mb-4">
•	Balcón en la sala y recámara principal </p> <p className="mb-4">
•	Estacionamiento privado </p> <p className="mb-4">
•	Roof Garden </p> <p className="mb-4">
•	Cisterna </p> <p className="mb-4">
•	Bodega Individual por departamento (Para guardar tus bicicletas 🚲, herramientas etc.)
</p>
         
               
            </div>
            <div className="grid grid-cols-1 gap-4 mt-8">
            <img src="./images/depa.jpeg" className="ban" />
    
            </div>
            
        </div></SwiperSlide>
        <SwiperSlide><div className="gap-16 items-center pb-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-1 lg:py-16 lg:px-6">
        
        <div className="font-light text-left text-gray-500 sm:text-lg ">
                <h2 className="my-4  tracking-tight font-extrabold text-gray-900  ">Masión Golondrinas Ixtapa $750,000 USD</h2>
                <p className="mb-4">•	La superficie del terreno es de 651 m2.</p> <p className="mb-4">
•	La construcción es de 487 m2.
</p>
         
               
            </div>
            <div className="grid grid-cols-1 gap-4 mt-8">
            <img src="./images/mansion.jpeg" className="ban" />
    
            </div>
            
        </div></SwiperSlide>
        
      
      </Swiper>





            </div>
            
        </div>
    <div className="gap-16 items-center pb-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-1 lg:py-16 lg:px-6">
        
        <div className="font-light text-gray-500 sm:text-lg ">
            <h2 className="mb-4 text-2xl tracking-tight font-extrabold text-gray-900 ">Lotes en Puerto Vicente</h2>
            <p className="mb-4">
Descubre tu paraíso junto al mar en Puerto Vicente Guerrero, Petatlán, donde te ofrecemos una amplia variedad de lotes con vistas panorámicas al océano Pacífico. Sumérgete en un entorno lleno de posibilidades y comodidades que hacen de este lugar un destino único.</p>
<h2 className="mb-4 tracking-tight font-extrabold text-gray-900 ">Atracciones en la Zona:</h2>
            <p className="mb-4">Restaurantes: Disfruta de la rica gastronomía local en los restaurantes cercanos, donde podrás saborear deliciosos platillos mientras contemplas la belleza del océano.</p>
            <p className="mb-4">Entretenimiento Acuático: Sumérgete en la diversión con juegos acuáticos, toboganes, paseos en lancha y la emoción de pasear en banana. La zona te brinda la oportunidad de disfrutar de actividades acuáticas emocionantes.</p>
            <p className="mb-4">Hoteles: Si buscas comodidad y relax, la proximidad a hoteles de calidad te permitirá disfrutar de una estancia placentera para complementar tu experiencia en este paraíso junto al mar.</p>
            <h2 className="mb-4 tracking-tight font-extrabold text-gray-900 ">Medidas de los Lotes:</h2>
            <p className="mb-4">Las opciones de terrenos varían para adaptarse a tus necesidades. Desde lotes de 15x20 hasta 20x20, todos diseñados para brindarte una vista inigualable al mar. Cada lote ha sido seleccionado cuidadosamente para ofrecer la mejor experiencia a sus futuros propietarios.</p>
            <h2 className="mb-4 tracking-tight font-extrabold text-gray-900 ">Rango de Costos:</h2>
            <p className="mb-4">Desde una inversión accesible de 250 mil pesos hasta opciones más amplias de 450 mil pesos, encontrarás la opción perfecta que se ajuste a tu presupuesto y te permita realizar tu sueño de tener un pedazo de paraíso frente al mar.</p>
            <br/>
            <p className="mb-4">Descubre la combinación perfecta de tranquilidad, entretenimiento y belleza natural en cada uno de nuestros lotes con vista al mar en Puerto Vicente Guerrero. ¡Haz de este lugar tu hogar o tu refugio vacacional!</p>
            <a href="https://api.whatsapp.com/send/?phone=%2B527551441259" target="_blank" className="bg-transparent hover:bg-black text-black font-semibold hover:text-white m-auto py-2 px-4 border border-black hover:border-transparent rounded">Cotizar</a>

        </div>
        <div className="grid grid-cols-1 gap-4 mt-8">
        <img src="./images/vicente.JPG" className="ban" />
            
        </div>
    </div>
   
</section>
      
      </>
    )
  }
  