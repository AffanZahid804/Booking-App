const cities = [
    {
      city: "Karachi",
      shortDescription: "City in Sindh, Pakistan",
      properties: [
        {
          id: "1",
          name: "Pearl Continental Hotel Karachi",
          rating: 4.5,
          address: "Club Road, Karachi, Sindh, 75530, Pakistan",
          oldPrice: 15000,
          newPrice: 12000,
          photos: [
            {
              id: "101",
              image: "https://example.com/pc-karachi1.jpg",
            },
            {
              id: "102",
              image: "https://example.com/pc-karachi2.jpg",
            },
            // more images
          ],
          rooms: [
            {
              id: "201",
              name: "Deluxe Room",
              size: 500,
              refundable: "refundable",
              payment: "Pay at the property",
              bed: "1 king bed",
            },
            {
              id: "202",
              name: "Executive Room",
              size: 600,
              refundable: "non refundable",
              payment: "Pay in advance",
              bed: "1 king bed",
            },
          ],
        },
        {
          id: "2",
          name: "Mövenpick Hotel Karachi",
          rating: 4.0,
          address: "Club Road, Karachi, Sindh, 75530, Pakistan",
          oldPrice: 13000,
          newPrice: 11000,
          photos: [
            {
              id: "103",
              image: "https://example.com/movenpick-karachi1.jpg",
            },
            {
              id: "104",
              image: "https://example.com/movenpick-karachi2.jpg",
            },
            // more images
          ],
          rooms: [
            {
              id: "203",
              name: "Superior Room",
              size: 450,
              refundable: "refundable",
              payment: "Pay at the property",
              bed: "1 queen bed",
            },
            {
              id: "204",
              name: "Executive Suite",
              size: 700,
              refundable: "non refundable",
              payment: "Pay in advance",
              bed: "1 king bed",
            },
          ],
        },
        // Add three more properties for Karachi
      ],
    },
    {
      city: "Lahore",
      shortDescription: "City in Punjab, Pakistan",
      properties: [
        {
          id: "3",
          name: "Nishat Hotel",
          rating: 4.7,
          address: "Gulberg III, Lahore, Punjab, 54660, Pakistan",
          oldPrice: 14000,
          newPrice: 12500,
          photos: [
            {
              id: "105",
              image: "https://example.com/nishat-lahore1.jpg",
            },
            {
              id: "106",
              image: "https://example.com/nishat-lahore2.jpg",
            },
          ],
          rooms: [
            {
              id: "205",
              name: "Luxury Suite",
              size: 550,
              refundable: "refundable",
              payment: "Pay at the property",
              bed: "1 king bed",
            },
            {
              id: "206",
              name: "Junior Suite",
              size: 500,
              refundable: "non refundable",
              payment: "Pay in advance",
              bed: "1 queen bed",
            },
          ],
        },
        {
          id: "4",
          name: "Pearl Continental Hotel Lahore",
          rating: 4.6,
          address: "Shahrah-e-Quaid-e-Azam, Lahore, Punjab, 54000, Pakistan",
          oldPrice: 15500,
          newPrice: 13000,
          photos: [
            {
              id: "107",
              image: "https://example.com/pc-lahore1.jpg",
            },
            {
              id: "108",
              image: "https://example.com/pc-lahore2.jpg",
            },
          ],
          rooms: [
            {
              id: "207",
              name: "Executive Suite",
              size: 700,
              refundable: "refundable",
              payment: "Pay at the property",
              bed: "1 king bed",
            },
            {
              id: "208",
              name: "Deluxe Room",
              size: 600,
              refundable: "non refundable",
              payment: "Pay in advance",
              bed: "1 queen bed",
            },
          ],
        },
        // Add three more properties for Lahore
      ],
    },
    {
      city: "Islamabad",
      shortDescription: "Capital city of Pakistan",
      properties: [
        {
          id: "5",
          name: "Serena Hotel Islamabad",
          rating: 4.8,
          address: "Khayaban-e-Suhrwardy, Islamabad, 44000, Pakistan",
          oldPrice: 16000,
          newPrice: 14500,
          photos: [
            {
              id: "109",
              image: "https://example.com/serena-islamabad1.jpg",
            },
            {
              id: "110",
              image: "https://example.com/serena-islamabad2.jpg",
            },
          ],
          rooms: [
            {
              id: "209",
              name: "Presidential Suite",
              size: 800,
              refundable: "refundable",
              payment: "Pay at the property",
              bed: "1 king bed",
            },
            {
              id: "210",
              name: "Deluxe Room",
              size: 600,
              refundable: "non refundable",
              payment: "Pay in advance",
              bed: "1 queen bed",
            },
          ],
        },
        {
          id: "6",
          name: "Islamabad Marriott Hotel",
          rating: 4.4,
          address: "Aga Khan Road, Shalimar 5, Islamabad, 44000, Pakistan",
          oldPrice: 15000,
          newPrice: 13500,
          photos: [
            {
              id: "111",
              image: "https://example.com/marriott-islamabad1.jpg",
            },
            {
              id: "112",
              image: "https://example.com/marriott-islamabad2.jpg",
            },
          ],
          rooms: [
            {
              id: "211",
              name: "Executive Room",
              size: 500,
              refundable: "refundable",
              payment: "Pay at the property",
              bed: "1 queen bed",
            },
            {
              id: "212",
              name: "Superior Suite",
              size: 650,
              refundable: "non refundable",
              payment: "Pay in advance",
              bed: "1 king bed",
            },
          ],
        },
        // Add three more properties for Islamabad
      ],
    },
    // Add more cities such as Faisalabad, Multan with five properties each
  ];
  