'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('Products', [{
        
          model: "Auricular Inalambrico Orejas",
          color: "verde",
          year: 2023,
          description: "Combina moda y música en un solo accesorio. Estos auriculares inalámbricos Bluetooth te brindan un sonido estéreo de alta fidelidad, un diseño único con orejas de monstruo iluminadas y una comodidad excepcional. Experimenta la música de una manera completamente nueva mientras destacas con estilo.",
          discount: 0,
          price: 10000,
          image: "a1.png",
          technicalSpecifications: [
             "- Bonitos auriculares con luces led",
             "- Vincha ajustable y plegable",
             "- Diseño envolvente que sella el sonido",
             "- Excelente calidad de sonido",
             "- Versión bluetooth 5.0",
             "- Compatibilidad universal con dispositivos bluetooth",
             "- Incluye cable de carga",
             "- Incluye cable auxiliar 3.5 mm (largo 100 cm)",
             "- Tamaño del parlante: 40mm",
             "- Impedancia: 32 Ohm",
             "- Tiempo de llamada: 7 horas aproximadamente",
             "- Tiempo de juego: 7 horas aproximadamente",
             "- Tiempo de música: 7 horas aproximadamente",
             "- Tiempo de carga: 2.5 horas",
             "- Distancia de uso hasta 10 metros"
          ],
          categoryId: 2, 
          brandId: 1,
          sectionId: 1,
          createdAt: new Date (),
          updatedAt: new Date ()
       
      }], {});
    
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('Products', null, {});
  }
};
