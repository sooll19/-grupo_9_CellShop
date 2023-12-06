const db = require("../../database/models");

module.exports = (req, res) => {
  db.User.findByPk(req.session.userLogin.id, { include: ["addresses"] })
    .then((user) => {
      const birthday = user.birthday
        ? new Date(user.birthday).toISOString()
        : null;
      const locationPrimary = user.addresses.find(({ isPrimary }) => isPrimary);

      const province = locationPrimary.province; 
      const address = locationPrimary.address;
      const city = locationPrimary.city;

      console.log(locationPrimary,'**********');

      res.render("profile", {
        ...user.dataValues,
        location: locationPrimary,
        birthday: birthday ? birthday.split("T")[0] : null,
        province: province,
        address: address,
        city: city,
      });

      
      user.province = province;
      user.address = address;
      user.city = city;
      return user.save();
    })
    .catch((error) => console.log(error));
};
