
import type { FoodItem, CartItemType } from './types';

export const popularFoods: FoodItem[] = [
    {
        id: 1,
        name: "Hambúrguer",
        category: "Hambúrguer",
        price: 25.00,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuANjrouUfwI2uco_7i0qoSMMZSp2YDeG-7VWV6hOIXMgdcqhIya2GdVybzfobBv2XPZAByptyPrj1w-wMqMEzbaYBWdhhpVORZdzhd3srA39erqw92r4BT-yqsxoM20TDJj8KxVdusnXl4NuaApLDr1y8cjNgmMLReaQfiXvvga3ryWWryHU9A0-7AFL23iLfNyngFyEW7iPyrpvuNRojykQFKvieL90oJ5bj53TmDkHN6u_mjCxBIB0MBEROQz_fvKKrF0WuEAdl8_",
        description: "O hambúrguer é um sanduíche de carne bovina, servido entre dois pães macios, coberto com queijo, alface e ketchup. É muito popular...",
        rating: 4.8,
        calories: 150,
        deliveryTime: "15-20",
    },
    {
        id: 2,
        name: "Pizza Pepperoni",
        category: "Pizza",
        price: 35.00,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB6ak1KAyVEVeXlb168FC1G4vDl2ah9FUB6spSB72TQqlN9rUE-vvtUae0K7QmEz1cqJiM3prZVRsWhnt6wYZNV409LITBPBvxOigwgmeHx_4a3gX3sBIP2BPJPBnB8rvQdD76d35ZkgUNi_F2n_GmAEkb96iWj2mDEATTaAV6ulikud6LZJWn4oC9p2ryz6BJdu2WFayzOpGtW1utTR9iu_OR93u50HbhMMskMP5DxjKQMAku9X5vtWZivtpp0cROzpcgB5VG7tZBJ",
        description: "Uma deliciosa pizza com base de molho de tomate, queijo mussarela e fatias de pepperoni picante.",
    },
    {
        id: 3,
        name: "Sanduíche Queijo",
        category: "Sanduíche",
        price: 20.00,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsmdQxbrbNYS-XFMy2HdCP_WAaI86Gm-9g9LL1r5vgr3wo9Bax7hKl-GsNGzJ9o4i_ocLNQrwfHP9fG9fgIgY7SOLzEgozXjkthWWgE4RwkNswzVDcYhmrbJEdpGqkbAipO8BVpu6OhiVlE3nM-Gng0VoVzmeAQlM-UkTpuDcJKNHjofBhYdggjmgEK-mQS3IjwkgJTFs9wdQSD75Gbda4Mxu-R4Zp5XdNyUkiqJ9I-WaW4hIaAkl3Boyr3_Pg9_yq4De8DIbSKUO8",
        description: "Um sanduíche clássico com queijo derretido entre duas fatias de pão tostado na manteiga.",
    },
    {
        id: 6,
        name: "Pizza Margherita",
        category: "Pizza",
        price: 32.00,
        image: "https://img.freepik.com/fotos-gratis/pizza-fresquinha-saborosa-na-mesa_23-2150958744.jpg",
        description: "Pizza clássica com molho de tomate, mussarela fresca, manjericão, sal e azeite extra-virgem.",
        rating: 4.9,
        calories: 250,
        deliveryTime: "20-25",
    },
    {
        id: 7,
        name: "Batata Frita",
        category: "Acompanhamento",
        price: 15.00,
        image: "https://img.freepik.com/fotos-gratis/batatas-fritas-crocantes-com-ketchup-e-maionese_144627-75225.jpg",
        description: "Porção generosa de batatas fritas crocantes por fora e macias por dentro, servidas com ketchup.",
        rating: 4.7,
        calories: 300,
        deliveryTime: "10-15",
    }
];

export const nearbyFoods: FoodItem[] = [
    {
        id: 4,
        name: "Hambúrguer",
        category: "Hambúrguer",
        price: 25.00,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZzL2hdbpxuotPQgXGH2kGK3U0qRSty_UwECCy3KXVUkm9vz0DF7WVc6S0LXbxjElJdbZ2wfPYsohBMX4BYdoRsv1O79782_4dvH6qfbx1e9GtNTgESq2Vq5NMNmQodmxr4K-sBRargK7V15aoOIYAxvuoxQFjD_twpFKqKGvSh25_dK8zzgm0XF_fijchTpwGPeVGuQB7nY1FVuPFMq8wc9iV-xtpfytraZhcv6MF3sv9fB8CPcdiRVif7M9fD9q3IlVo4sny04sj",
        description: "Outro delicioso hambúrguer de um restaurante próximo, com ingredientes frescos e pão artesanal.",
    },
    {
        id: 5,
        name: "Pizza Pepperoni",
        category: "Pizza",
        price: 35.00,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuATiD7WWd6UjVzYPGr2ZeIew92GIiCcgyqZbpBFPJnt3NyXXV455hD7OINtMalXh-tUEmTDAQGC-RVQIro4hdBE5QfOVtVtmOhxahMXiJEgEamPSUA-ay62C-1xfaHLtsl1TUJ13PVjqy54gxtRilsoOvyDiXxKrZ4b_wL5Qe_WQGngBy6ga8fedY6-3ojFFVhUkZ3jVgndO3gp-7aZARZjLMQBowffNxOM_2v6h3bHfbgNsXKZHPz7QXPZrKH_ePs1dnvPPNm_69D0",
        description: "Pizza de pepperoni artesanal feita em forno a lenha, com borda recheada opcional.",
    },
    {
        id: 8,
        name: "Pizza Calabresa",
        category: "Pizza",
        price: 38.00,
        image: "https://img.freepik.com/fotos-gratis/pizza-de-pepperoni-com-queijo-mussarela-azeitonas-e-molho-de-tomate-em-um-fundo-escuro_73552-1402.jpg",
        description: "Pizza de calabresa suculenta com cebola roxa fatiada sobre uma camada de queijo mussarela.",
        rating: 4.6,
        calories: 280,
        deliveryTime: "25-30",
    }
];

export const cartItemsData: CartItemType[] = [
    {
        id: 1,
        name: "Hambúrguer",
        category: "Hambúrguer",
        price: 25.00,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBCfoS1HNAt0QH3F1iJOh_ttkMWthpAcBMiDxVT-kmiG9N9F-hOazotIk4oH9iOQcDZmJi0Dsx3oddgtmjZkXdhSjqg3N2qKdF3cFETDKrumT5qVvKDJlg9x0SKp0q6qNt22cba9f3tKgl5pEWi12r8JV4-Ve-rfIyYbtq8i1sYn0U93vIoVpC02yA858ds4lwjbGnM6iNxlau0QgR7luIKKamtO_E03u7nWdJRybQvD3wbKlZXiR_LYl5VaPK2yiJnLh4AKKrxrSkK",
        quantity: 1,
        extra: "Queijo Extra",
        description: "",
    },
    {
        id: 2,
        name: "Pizza de Pepperoni",
        category: "Pizza",
        price: 35.00,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHB_mmW5tAmyhyw87ZoXfkX6IPIIYwzC18u-Nw9cydCQM_Y1KfV14seAA_tw0-6jnCFxHvtxeNeRi7NLVFjUlmglmFPty0P2VZHV4YrusUEqXczr8a71eetmvPbkWRoKXtm5v3Y1oxA4djiHw489LDsKaX0F9O8uWbCogSwAKGwKPvKPxACNkPgYY1_q5TchmILi5P2HKMeMRzilv0nm0PBQTIK0Mq_-CFfIFWG5ydewrNJLEGK4fgaYcbyj_orVmcupAAAz8Dr6BU",
        quantity: 2,
        extra: "Grande, Massa Fina",
        description: "",
    },
    {
        id: 3,
        name: "Sanduíche de Queijo",
        category: "Sanduíche",
        price: 20.00,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBBVI5HaVea297rdQ2uEDHjGu9fFQJ9nj3A6uLrfKg8Smk-5ZdNkgl9EMmpSmnS6AuMUkVEI7_Jm-9LhzF9bkxN27c9FBcd_sxObHbk84S67R75JyGjWs3PbwqoSmtstDJ2-Wo15dBmMzxDEWSqOiBjh4hQH0v6ueb4a3OG1GLYnV9BRyeiWC8Fy_PrWRxugylj-IYhalcML9YNP69XCb5RT_A9mRRWobgKOvaZYMinMGdsbrYIcuO3X_18ZD45o0tvD6B15BbwMGCI",
        quantity: 1,
        extra: "Grelhado",
        description: "",
    }
];
