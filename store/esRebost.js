export const state = () => ({
    name: 'Es Rebost',
    logo: 'https://www.esrebost.com/themes/demo/assets/images/logofooter.svg',
    currency: '€',
    categories: [
        {
            name: 'Entrantes',
            dishes: [
                {
                    name: 'Ensalada Mixta',
                    ingredients: [
                        {
                            id: 1,
                            name: 'Lechuga'
                        },
                        {
                            id: 2,
                            name: 'Queso'
                        },
                        {
                            id: 2,
                            name: 'Tomate'
                        }
                    ],
                    price: [
                        {
                            label: 'Pequeña',
                            value: 14.45
                        },
                        {
                            label: 'Mediana',
                            value: 24.45
                        },
                        {
                            label: 'Grande',
                            value: 34.45
                        }
                    ],
                    image: 'https://mimenurealfooding.com/wp-content/uploads/ensalada-mixta.jpeg',
                    allergens: {
                        celery: false,
                        crustaceans: true,
                        dioxide: false,
                        egg: true,
                        fish: false,
                        gluten: true,
                        lupins: true,
                        milk: true,
                        mollusks: false,
                        mustard: true,
                        peanuts: false,
                        peelfruits: false,
                        sesame: true,
                        soy: true
                    }
                },
                {
                    name: 'Ensalada Cesar',
                    ingredients: [
                        {
                            id: 1,
                            name: 'Lechuga'
                        },
                        {
                            id: 2,
                            name: 'Queso'
                        },
                        {
                            id: 2,
                            name: 'Tomate'
                        }
                    ],
                    price: 12.52,
                    image: 'https://s3.amazonaws.com/menuperu.pe/media/receta/Ensalada%20mixta-1638.jpeg',
                    allergens: {
                        celery: false,
                        crustaceans: true,
                        dioxide: false,
                        egg: true,
                        fish: false,
                        gluten: true,
                        lupins: true,
                        milk: true,
                        mollusks: false,
                        mustard: true,
                        peanuts: false,
                        peelfruits: false,
                        sesame: true,
                        soy: true
                    }
                }
            ]
        },
        {
            name: 'Carnes',
            dishes: [
                {
                    name: 'Pollo a la plancha',
                    ingredients: [
                        {
                            id: 1,
                            name: 'Lechuga'
                        },
                        {
                            id: 2,
                            name: 'Queso'
                        },
                        {
                            id: 2,
                            name: 'Tomate'
                        }
                    ],
                    price: 24.52,
                    image: 'https://mimenurealfooding.com/wp-content/uploads/ensalada-mixta.jpeg',
                    allergens: {
                        celery: false,
                        crustaceans: true,
                        dioxide: false,
                        egg: true,
                        fish: false,
                        gluten: true,
                        lupins: true,
                        milk: true,
                        mollusks: false,
                        mustard: true,
                        peanuts: false,
                        peelfruits: false,
                        sesame: true,
                        soy: true
                    }
                },
                {
                    name: 'Ternera al horno',
                    ingredients: [
                        {
                            id: 1,
                            name: 'Lechuga'
                        },
                        {
                            id: 2,
                            name: 'Queso'
                        },
                        {
                            id: 2,
                            name: 'Tomate'
                        }
                    ],
                    price: 12.52,
                    image: 'https://s3.amazonaws.com/menuperu.pe/media/receta/Ensalada%20mixta-1638.jpeg',
                    allergens: {
                        celery: false,
                        crustaceans: true,
                        dioxide: false,
                        egg: true,
                        fish: false,
                        gluten: true,
                        lupins: true,
                        milk: true,
                        mollusks: false,
                        mustard: true,
                        peanuts: false,
                        peelfruits: false,
                        sesame: true,
                        soy: true
                    }
                }
            ]
        },
        {
            name: 'Veganismo',
            dishes: [
                {
                    name: 'Pollo a la plancha',
                    ingredients: [
                        {
                            id: 1,
                            name: 'Lechuga'
                        },
                        {
                            id: 2,
                            name: 'Queso'
                        },
                        {
                            id: 2,
                            name: 'Tomate'
                        }
                    ],
                    price: 24.52,
                    image: 'https://mimenurealfooding.com/wp-content/uploads/ensalada-mixta.jpeg'
                },
                {
                    name: 'Ternera al horno',
                    ingredients: [
                        {
                            id: 1,
                            name: 'Lechuga'
                        },
                        {
                            id: 2,
                            name: 'Queso'
                        },
                        {
                            id: 2,
                            name: 'Tomate'
                        }
                    ],
                    price: 12.52,
                    image: 'https://s3.amazonaws.com/menuperu.pe/media/receta/Ensalada%20mixta-1638.jpeg'
                }
            ]
        },
        {
            name: 'Postres',
            dishes: [
                {
                    name: 'Pollo a la plancha',
                    ingredients: [
                        {
                            id: 1,
                            name: 'Lechuga'
                        },
                        {
                            id: 2,
                            name: 'Queso'
                        },
                        {
                            id: 2,
                            name: 'Tomate'
                        }
                    ],
                    price: 24.52,
                    image: 'https://mimenurealfooding.com/wp-content/uploads/ensalada-mixta.jpeg'
                },
                {
                    name: 'Ternera al horno',
                    ingredients: [
                        {
                            id: 1,
                            name: 'Lechuga'
                        },
                        {
                            id: 2,
                            name: 'Queso'
                        },
                        {
                            id: 2,
                            name: 'Tomate'
                        }
                    ],
                    price: 12.52,
                    image: 'https://s3.amazonaws.com/menuperu.pe/media/receta/Ensalada%20mixta-1638.jpeg'
                }
            ]
        },
        {
            name: 'Vegetarianos',
            dishes: [
                {
                    name: 'Pollo a la plancha',
                    ingredients: [
                        {
                            id: 1,
                            name: 'Lechuga'
                        },
                        {
                            id: 2,
                            name: 'Queso'
                        },
                        {
                            id: 2,
                            name: 'Tomate'
                        }
                    ],
                    price: 24.52,
                    image: 'https://mimenurealfooding.com/wp-content/uploads/ensalada-mixta.jpeg'
                },
                {
                    name: 'Ternera al horno',
                    ingredients: [
                        {
                            id: 1,
                            name: 'Lechuga'
                        },
                        {
                            id: 2,
                            name: 'Queso'
                        },
                        {
                            id: 2,
                            name: 'Tomate'
                        }
                    ],
                    price: 12.52,
                    image: 'https://s3.amazonaws.com/menuperu.pe/media/receta/Ensalada%20mixta-1638.jpeg'
                },
                {
                    name: 'Pollo a la plancha',
                    ingredients: [
                        {
                            id: 1,
                            name: 'Lechuga'
                        },
                        {
                            id: 2,
                            name: 'Queso'
                        },
                        {
                            id: 2,
                            name: 'Tomate'
                        }
                    ],
                    price: 24.52,
                    image: 'https://mimenurealfooding.com/wp-content/uploads/ensalada-mixta.jpeg'
                },
                {
                    name: 'Ternera al horno',
                    ingredients: [
                        {
                            id: 1,
                            name: 'Lechuga'
                        },
                        {
                            id: 2,
                            name: 'Queso'
                        },
                        {
                            id: 2,
                            name: 'Tomate'
                        }
                    ],
                    price: 12.52,
                    image: 'https://s3.amazonaws.com/menuperu.pe/media/receta/Ensalada%20mixta-1638.jpeg'
                },
                {
                    name: 'Pollo a la plancha',
                    ingredients: [
                        {
                            id: 1,
                            name: 'Lechuga'
                        },
                        {
                            id: 2,
                            name: 'Queso'
                        },
                        {
                            id: 2,
                            name: 'Tomate'
                        }
                    ],
                    price: 24.52,
                    image: 'https://mimenurealfooding.com/wp-content/uploads/ensalada-mixta.jpeg'
                },
                {
                    name: 'Ternera al horno',
                    ingredients: [
                        {
                            id: 1,
                            name: 'Lechuga'
                        },
                        {
                            id: 2,
                            name: 'Queso'
                        },
                        {
                            id: 2,
                            name: 'Tomate'
                        }
                    ],
                    price: 12.52,
                    image: 'https://s3.amazonaws.com/menuperu.pe/media/receta/Ensalada%20mixta-1638.jpeg'
                },
                {
                    name: 'Pollo a la plancha',
                    ingredients: [
                        {
                            id: 1,
                            name: 'Lechuga'
                        },
                        {
                            id: 2,
                            name: 'Queso'
                        },
                        {
                            id: 2,
                            name: 'Tomate'
                        }
                    ],
                    price: 24.52,
                    image: 'https://mimenurealfooding.com/wp-content/uploads/ensalada-mixta.jpeg'
                },
                {
                    name: 'Ternera al horno',
                    ingredients: [
                        {
                            id: 1,
                            name: 'Lechuga'
                        },
                        {
                            id: 2,
                            name: 'Queso'
                        },
                        {
                            id: 2,
                            name: 'Tomate'
                        }
                    ],
                    price: 12.52,
                    image: 'https://s3.amazonaws.com/menuperu.pe/media/receta/Ensalada%20mixta-1638.jpeg'
                },
                {
                    name: 'Pollo a la plancha',
                    ingredients: [
                        {
                            id: 1,
                            name: 'Lechuga'
                        },
                        {
                            id: 2,
                            name: 'Queso'
                        },
                        {
                            id: 2,
                            name: 'Tomate'
                        }
                    ],
                    price: 24.52,
                    image: 'https://mimenurealfooding.com/wp-content/uploads/ensalada-mixta.jpeg'
                },
                {
                    name: 'Ternera al horno',
                    ingredients: [
                        {
                            id: 1,
                            name: 'Lechuga'
                        },
                        {
                            id: 2,
                            name: 'Queso'
                        },
                        {
                            id: 2,
                            name: 'Tomate'
                        }
                    ],
                    price: 12.52,
                    image: 'https://s3.amazonaws.com/menuperu.pe/media/receta/Ensalada%20mixta-1638.jpeg'
                },
                {
                    name: 'Pollo a la plancha',
                    ingredients: [
                        {
                            id: 1,
                            name: 'Lechuga'
                        },
                        {
                            id: 2,
                            name: 'Queso'
                        },
                        {
                            id: 2,
                            name: 'Tomate'
                        }
                    ],
                    price: 24.52,
                    image: 'https://mimenurealfooding.com/wp-content/uploads/ensalada-mixta.jpeg'
                },
                {
                    name: 'Ternera al horno',
                    ingredients: [
                        {
                            id: 1,
                            name: 'Lechuga'
                        },
                        {
                            id: 2,
                            name: 'Queso'
                        },
                        {
                            id: 2,
                            name: 'Tomate'
                        }
                    ],
                    price: 12.52,
                    image: 'https://s3.amazonaws.com/menuperu.pe/media/receta/Ensalada%20mixta-1638.jpeg'
                },
                {
                    name: 'Pollo a la plancha',
                    ingredients: [
                        {
                            id: 1,
                            name: 'Lechuga'
                        },
                        {
                            id: 2,
                            name: 'Queso'
                        },
                        {
                            id: 2,
                            name: 'Tomate'
                        }
                    ],
                    price: 24.52,
                    image: 'https://mimenurealfooding.com/wp-content/uploads/ensalada-mixta.jpeg'
                },
                {
                    name: 'Ternera al horno',
                    ingredients: [
                        {
                            id: 1,
                            name: 'Lechuga'
                        },
                        {
                            id: 2,
                            name: 'Queso'
                        },
                        {
                            id: 2,
                            name: 'Tomate'
                        }
                    ],
                    price: 12.52,
                    image: 'https://s3.amazonaws.com/menuperu.pe/media/receta/Ensalada%20mixta-1638.jpeg'
                },
                {
                    name: 'Pollo a la plancha',
                    ingredients: [
                        {
                            id: 1,
                            name: 'Lechuga'
                        },
                        {
                            id: 2,
                            name: 'Queso'
                        },
                        {
                            id: 2,
                            name: 'Tomate'
                        }
                    ],
                    price: 24.52,
                    image: 'https://mimenurealfooding.com/wp-content/uploads/ensalada-mixta.jpeg'
                },
                {
                    name: 'Ternera al horno',
                    ingredients: [
                        {
                            id: 1,
                            name: 'Lechuga'
                        },
                        {
                            id: 2,
                            name: 'Queso'
                        },
                        {
                            id: 2,
                            name: 'Tomate'
                        }
                    ],
                    price: 12.52,
                    image: 'https://s3.amazonaws.com/menuperu.pe/media/receta/Ensalada%20mixta-1638.jpeg'
                },
                {
                    name: 'Pollo a la plancha',
                    ingredients: [
                        {
                            id: 1,
                            name: 'Lechuga'
                        },
                        {
                            id: 2,
                            name: 'Queso'
                        },
                        {
                            id: 2,
                            name: 'Tomate'
                        }
                    ],
                    price: 24.52,
                    image: 'https://mimenurealfooding.com/wp-content/uploads/ensalada-mixta.jpeg'
                },
                {
                    name: 'Ternera al horno',
                    ingredients: [
                        {
                            id: 1,
                            name: 'Lechuga'
                        },
                        {
                            id: 2,
                            name: 'Queso'
                        },
                        {
                            id: 2,
                            name: 'Tomate'
                        }
                    ],
                    price: 12.52,
                    image: 'https://s3.amazonaws.com/menuperu.pe/media/receta/Ensalada%20mixta-1638.jpeg'
                },
                {
                    name: 'Pollo a la plancha',
                    ingredients: [
                        {
                            id: 1,
                            name: 'Lechuga'
                        },
                        {
                            id: 2,
                            name: 'Queso'
                        },
                        {
                            id: 2,
                            name: 'Tomate'
                        }
                    ],
                    price: 24.52,
                    image: 'https://mimenurealfooding.com/wp-content/uploads/ensalada-mixta.jpeg'
                },
                {
                    name: 'Ternera al horno',
                    ingredients: [
                        {
                            id: 1,
                            name: 'Lechuga'
                        },
                        {
                            id: 2,
                            name: 'Queso'
                        },
                        {
                            id: 2,
                            name: 'Tomate'
                        }
                    ],
                    price: 12.52,
                    image: 'https://s3.amazonaws.com/menuperu.pe/media/receta/Ensalada%20mixta-1638.jpeg'
                }
            ]
        },
        {
            name: 'Bebidas',
            dishes: [
                {
                    name: 'Pollo a la plancha',
                    ingredients: [
                        {
                            id: 1,
                            name: 'Lechuga'
                        },
                        {
                            id: 2,
                            name: 'Queso'
                        },
                        {
                            id: 2,
                            name: 'Tomate'
                        }
                    ],
                    price: 24.52,
                    image: 'https://mimenurealfooding.com/wp-content/uploads/ensalada-mixta.jpeg'
                },
                {
                    name: 'Pollo a la plancha',
                    ingredients: [
                        {
                            id: 1,
                            name: 'Lechuga'
                        },
                        {
                            id: 2,
                            name: 'Queso'
                        },
                        {
                            id: 2,
                            name: 'Tomate'
                        }
                    ],
                    price: 24.52,
                    image: 'https://mimenurealfooding.com/wp-content/uploads/ensalada-mixta.jpeg'
                },
                {
                    name: 'Pollo a la plancha',
                    ingredients: [
                        {
                            id: 1,
                            name: 'Lechuga'
                        },
                        {
                            id: 2,
                            name: 'Queso'
                        },
                        {
                            id: 2,
                            name: 'Tomate'
                        }
                    ],
                    price: 24.52,
                    image: 'https://mimenurealfooding.com/wp-content/uploads/ensalada-mixta.jpeg'
                },
                {
                    name: 'Pollo a la plancha',
                    ingredients: [
                        {
                            id: 1,
                            name: 'Lechuga'
                        },
                        {
                            id: 2,
                            name: 'Queso'
                        },
                        {
                            id: 2,
                            name: 'Tomate'
                        }
                    ],
                    price: 24.52,
                    image: 'https://mimenurealfooding.com/wp-content/uploads/ensalada-mixta.jpeg'
                },
                {
                    name: 'Pollo a la plancha',
                    ingredients: [
                        {
                            id: 1,
                            name: 'Lechuga'
                        },
                        {
                            id: 2,
                            name: 'Queso'
                        },
                        {
                            id: 2,
                            name: 'Tomate'
                        }
                    ],
                    price: 24.52,
                    image: 'https://mimenurealfooding.com/wp-content/uploads/ensalada-mixta.jpeg'
                },
                {
                    name: 'Pollo a la plancha',
                    ingredients: [
                        {
                            id: 1,
                            name: 'Lechuga'
                        },
                        {
                            id: 2,
                            name: 'Queso'
                        },
                        {
                            id: 2,
                            name: 'Tomate'
                        }
                    ],
                    price: 24.52,
                    image: 'https://mimenurealfooding.com/wp-content/uploads/ensalada-mixta.jpeg'
                },
                {
                    name: 'Pollo a la plancha',
                    ingredients: [
                        {
                            id: 1,
                            name: 'Lechuga'
                        },
                        {
                            id: 2,
                            name: 'Queso'
                        },
                        {
                            id: 2,
                            name: 'Tomate'
                        }
                    ],
                    price: 24.52,
                    image: 'https://mimenurealfooding.com/wp-content/uploads/ensalada-mixta.jpeg'
                },
                {
                    name: 'Ternera al horno',
                    ingredients: [
                        {
                            id: 1,
                            name: 'Lechuga'
                        },
                        {
                            id: 2,
                            name: 'Queso'
                        },
                        {
                            id: 2,
                            name: 'Tomate'
                        }
                    ],
                    price: 12.52,
                    image: 'https://s3.amazonaws.com/menuperu.pe/media/receta/Ensalada%20mixta-1638.jpeg'
                }
            ]
        }
    ]
})
