// DATABASE RECOMMENDATIONS - FILE TERPISAH
const recommendationDB = {
    // PIT TEMPUDO 2 - Data lengkap semua seam
    "PIT_TEMPUDO_2_35_claystone": { pf: 0.145, burden: 8.0, spacing: 10.0 },
    
    "PIT_TEMPUDO_2_36_claystone": { pf: 0.155, burden: 8.0, spacing: 10.0 },
    "PIT_TEMPUDO_2_36_siltstone": { pf: 0.145, burden: 8.0, spacing: 10.0 },
    "PIT_TEMPUDO_2_36_sandstone": { pf: 0.11, burden: 8.0, spacing: 10.0 },

    "PIT_TEMPUDO_2_37_siltstone": { pf: 0.15, burden: 8.0, spacing: 10.0 },
    "PIT_TEMPUDO_2_37_sandstone": { pf: 0.11, burden: 8.0, spacing: 10.0 },

    "PIT_TEMPUDO_2_38_claystone": { pf: 0.155, burden: 8.0, spacing: 10.0 },
    "PIT_TEMPUDO_2_38_siltstone": { pf: 0.15, burden: 8.0, spacing: 10.0 },
    "PIT_TEMPUDO_2_38_sandstone": { pf: 0.105, burden: 8.0, spacing: 10.0 },
    
    // PIT TEMPUDO 3 - Data lengkap
    "PIT_TEMPUDO_3_27_claystone": { pf: 0.13, burden: 9.0, spacing: 10.0 },

    "PIT_TEMPUDO_3_28_claystone": { pf: 0.13, burden: 9.0, spacing: 10.0 },
    "PIT_TEMPUDO_3_28_sandstone": { pf: 0.11, burden: 9.0, spacing: 10.0 },

    "PIT_TEMPUDO_3_29_claystone": { pf: 0.13, burden: 9.0, spacing: 10.0 },
    "PIT_TEMPUDO_3_29_claystone": { pf: 0.105, burden: 9.0, spacing: 10.0 },

    "PIT_TEMPUDO_3_30_claystone": { pf: 0.13, burden: 9.0, spacing: 10.0 },
    "PIT_TEMPUDO_3_30_claystone": { pf: 0.11, burden: 9.0, spacing: 10.0 },
    
    // PIT TEMPUDO 4 SWAP - Data lengkap
    "PIT_TEMPUDO_4_SWAP_27_claystone": { pf: 0.13, burden: 9.0, spacing: 10.0 },
    "PIT_TEMPUDO_4_SWAP_27_sandstone": { pf: 0.105, burden: 9.0, spacing: 10.0 },
    "PIT_TEMPUDO_4_SWAP_27_siltstone": { pf: 0.1, burden: 9.0, spacing: 10.0 },

    "PIT_TEMPUDO_4_SWAP_28_claystone": { pf: 0.13, burden: 9.0, spacing: 10.0 },
    "PIT_TEMPUDO_4_SWAP_28_sandstone": { pf: 0.1, burden: 9.0, spacing: 10.0 },

    "PIT_TEMPUDO_4_SWAP_29_claystone": { pf: 0.135, burden: 9.0, spacing: 10.0 },
    "PIT_TEMPUDO_4_SWAP_29_sandstone": { pf: 0.105, burden: 9.0, spacing: 10.0 },

    "PIT_TEMPUDO_4_SWAP_29_medium_sandstone": { pf: 0.135, burden: 9.0, spacing: 10.0 },
    "PIT_TEMPUDO_4_SWAP_29_fine_sandstone": { pf: 0.105, burden: 9.0, spacing: 10.0 },

    
    // Default values jika data tidak ditemukan
    "default_claystone": { pf: 0.16, burden: 8.0, spacing: 10.0 },
    "default_siltstone": { pf: 0.14, burden: 8.0, spacing: 10.0 },
    "default_sandstone": { pf: 0.11, burden: 8.0, spacing: 10.0 }
};

// Available PITs
const availablePITs = [
    { value: "PIT_TEMPUDO_2", name: "PIT TEMPUDO 2", location: "Area Utara" },
    { value: "PIT_TEMPUDO_3", name: "PIT TEMPUDO 3", location: "Area Timur" },
    { value: "PIT_TEMPUDO_4_SWAP", name: "PIT TEMPUDO 4 SWAP", location: "Area Selatan" },
];

// Available Seams per PIT
const seamMapping = {
    'PIT_TEMPUDO_2': ['35', '36', '37', '38'],
    'PIT_TEMPUDO_3': ['27', '28', '29', '30'],
    'PIT_TEMPUDO_4_SWAP': ['27', '28', '29', '30'],
};

// Available Materials
const availableMaterials = [
    { value: "claystone", name: "Claystone", description: "Batuan sedimen dengan kandungan clay tinggi" },
    { value: "siltstone", name: "Siltstone", description: "Batuan sedimen dengan ukuran partikel silt" },
    { value: "sandstone", name: "Sandstone", description: "Batuan sedimen dengan butiran sand" }
];
