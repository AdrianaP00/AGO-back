const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const Company = require("../api/models/company.models");

const companyArray = [
    {
        name: "Tech Innovators",
        business_name: "Innovative Tech Solutions Inc.",
        vat: "123456789",
        direcction: "1234 Tech Street",
        country: "United States",
        logo: "logo1.jpg",
        numberEmployes: 50,
        id_user: "64f1f76422539ea74d29fa2d",
      },
      {
        name: "Global Services Corp",
        business_name: "Global Professional Services Ltd.",
        vat: "987654321",
        direcction: "5678 Service Avenue",
        country: "United Kingdom",
        logo: "logo2.jpg",
        numberEmployes: 200,
        id_user: "64f1f76422539ea74d29fa2d",
      },
      {
        name: "Food Delight",
        business_name: "Delicious Eats LLC",
        vat: "246813579",
        direcction: "789 Food Court",
        country: "Canada",
        logo: "logo3.jpg",
        numberEmployes: 30,
        id_user:"64f1f76422539ea74d29fa2d",
      },
      {
        name: "GreenTech Solutions",
        business_name: "Sustainable Tech Innovations Ltd.",
        vat: "135792468",
        direcction: "234 Eco Street",
        country: "Australia",
        logo: "logo4.jpg",
        numberEmployes: 80,
        id_user:"64f1f76422539ea74d29fa2d",
      },
      {
        name: "Fashion Forward",
        business_name: "Trendy Fashionistas Inc.",
        vat: "567890123",
        direcction: "345 Fashion Avenue",
        country: "France",
        logo: "logo5.jpg",
        numberEmployes: 150,
        id_user: "64f1f76422539ea74d29fa2d",
      }]

const DB_URL= process.env.DB_URL;

mongoose.connect(DB_URL)
.then(async()=> {
    const allCompany = await Company.find();
    if (allCompany.length > 0) {
        await Company.collection.drop();
        console.log("collection delete");
    }
})
.catch((error)=> console.log("Retry",error))

.then(async ()=> {
    const CompanyMap = companyArray.map((company) => new Company(company));
    await Company.insertMany(CompanyMap);
    console.log("ok");
})
.catch((error) => console.log("Error", error))
.finally(()=> mongoose.disconnect())