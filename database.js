// DATABASE RECOMMENDATIONS - Berdasarkan data Excel
// File: asdasdas.xlsx

const recommendationDB = {
    // ==================== PIT TEMPUDO 3 ====================
    // Seam 27
    "PIT_TEMPUDO_3_27_CLAYSTONE": { pf: 0.1466, burden: 9.0, spacing: 10.0 },
    
    // Seam 28
    "PIT_TEMPUDO_3_28_SANDSTONE": { pf: 0.1162, burden: 9.0, spacing: 10.0 },
    "PIT_TEMPUDO_3_28_CLAYSTONE": { pf: 0.1466, burden: 9.0, spacing: 10.0 },
    
    // Seam 29
    "PIT_TEMPUDO_3_29_SANDSTONE": { pf: 0.1162, burden: 9.0, spacing: 10.0 },
    "PIT_TEMPUDO_3_29_CLAYSTONE": { pf: 0.1535, burden: 9.0, spacing: 10.0 },
    
    // Seam 30
    "PIT_TEMPUDO_3_30_SANDSTONE": { pf: 0.1079, burden: 9.0, spacing: 10.0 },
    "PIT_TEMPUDO_3_30_CLAYSTONE": { pf: 0.1494, burden: 9.0, spacing: 10.0 },
    
    // Seam 31
    "PIT_TEMPUDO_3_31_SANDSTONE": { pf: 0.1203, burden: 9.0, spacing: 10.0 },
    "PIT_TEMPUDO_3_31_CLAYSTONE": { pf: 0.1328, burden: 9.0, spacing: 10.0 },
    
    // Seam 32
    "PIT_TEMPUDO_3_32_CLAYSTONE": { pf: 0.1283, burden: 9.0, spacing: 10.0 },
    
    // Seam 33
    "PIT_TEMPUDO_3_33_CLAYSTONE": { pf: 0.1306, burden: 9.0, spacing: 10.0 },
    
    // ==================== PIT TEMPUDO 2 ====================
    // Seam 35
    "PIT_TEMPUDO_2_35_CLAYSTONE": { pf: 0.1577, burden: 8.0, spacing: 10.0 },
    "PIT_TEMPUDO_2_35_SANDSTONE": { pf: 0.1369, burden: 8.0, spacing: 10.0 },
    
    // Seam 36
    "PIT_TEMPUDO_2_36_CLAYSTONE": { pf: 0.1784, burden: 8.0, spacing: 10.0 },
    "PIT_TEMPUDO_2_36_SANDSTONE": { pf: 0.1329, burden: 8.0, spacing: 10.0 },
    "PIT_TEMPUDO_2_36_SILTSTONE": { pf: 0.1506, burden: 8.0, spacing: 10.0 },
    
    // Seam 37
    "PIT_TEMPUDO_2_37_SANDSTONE": { pf: 0.1306, burden: 8.0, spacing: 10.0 },
    "PIT_TEMPUDO_2_37_SILTSTONE": { pf: 0.1684, burden: 8.0, spacing: 10.0 },
    
    // Seam 38
    "PIT_TEMPUDO_2_38_SANDSTONE": { pf: 0.1369, burden: 8.0, spacing: 10.0 },
    "PIT_TEMPUDO_2_38_CLAYSTONE": { pf: 0.1689, burden: 8.0, spacing: 10.0 },
    "PIT_TEMPUDO_2_38_SILTSTONE": { pf: 0.1689, burden: 8.0, spacing: 10.0 },
    
    // Seam 39
    "PIT_TEMPUDO_2_39_CLAYSTONE": { pf: 0.1747, burden: 8.0, spacing: 10.0 },
    "PIT_TEMPUDO_2_39_SANDSTONE": { pf: 0.1277, burden: 8.0, spacing: 10.0 },
    
    // ==================== PIT TEMPUDO 4 ====================
    // Seam 25
    "PIT_TEMPUDO_4_25_CLAYSTONE": { pf: 0.1494, burden: 9.0, spacing: 10.0 },
    "PIT_TEMPUDO_4_25_SANDSTONE": { pf: 0.1203, burden: 9.0, spacing: 10.0 },
    
    // Seam 26
    "PIT_TEMPUDO_4_26_CLAYSTONE": { pf: 0.1535, burden: 9.0, spacing: 10.0 },
    
    // Seam 27
    "PIT_TEMPUDO_4_27_CLAYSTONE": { pf: 0.1535, burden: 9.0, spacing: 10.0 },
    "PIT_TEMPUDO_4_27_SILTSTONE": { pf: 0.1369, burden: 9.0, spacing: 10.0 },
    
    // Seam 28
    "PIT_TEMPUDO_4_28_CLAYSTONE": { pf: 0.1495, burden: 9.0, spacing: 10.0 },
    "PIT_TEMPUDO_4_28_SANDSTONE": { pf: 0.1079, burden: 9.0, spacing: 10.0 },
    
    // Seam 29
    "PIT_TEMPUDO_4_29_CLAYSTONE": { pf: 0.1618, burden: 9.0, spacing: 10.0 },
    "PIT_TEMPUDO_4_29_SANDSTONE": { pf: 0.1386, burden: 9.0, spacing: 10.0 },
    
    // Seam 30
    "PIT_TEMPUDO_4_30_SILTSTONE": { pf: 0.1411, burden: 9.0, spacing: 10.0 },
    "PIT_TEMPUDO_4_30_CLAYSTONE": { pf: 0.1535, burden: 9.0, spacing: 10.0 },
    
    // Seam 30B
    "PIT_TEMPUDO_4_30B_SILTSTONE": { pf: 0.1358, burden: 9.0, spacing: 10.0 },
    "PIT_TEMPUDO_4_30B_FINE_SANDSTONE": { pf: 0.1328, burden: 9.0, spacing: 10.0 },
    
    // Seam 31
    "PIT_TEMPUDO_4_31_FINE_SANDSTONE": { pf: 0.1286, burden: 9.0, spacing: 10.0 },
    
    // ==================== DEFAULT VALUES ====================
    "default_CLAYSTONE": { pf: 0.15, burden: 8.5, spacing: 10.0 },
    "default_SILTSTONE": { pf: 0.14, burden: 8.5, spacing: 10.0 },
    "default_SANDSTONE": { pf: 0.12, burden: 8.5, spacing: 10.0 },
    "default_FINE_SANDSTONE": { pf: 0.13, burden: 8.5, spacing: 10.0 },
    "default_MEDIUM_SANDSTONE": { pf: 0.125, burden: 8.5, spacing: 10.0 }
};

// ==================== AVAILABLE PITs ====================
const availablePITs = [
    { value: "PIT_TEMPUDO_2", name: "PIT TEMPUDO 2", location: "Area Utara" },
    { value: "PIT_TEMPUDO_3", name: "PIT TEMPUDO 3", location: "Area Timur" },
    { value: "PIT_TEMPUDO_4", name: "PIT TEMPUDO 4", location: "Area Selatan" }
];

// ==================== SEAM MAPPING per PIT ====================
const seamMapping = {
    'PIT_TEMPUDO_2': ['35', '36', '37', '38', '39'],
    'PIT_TEMPUDO_3': ['27', '28', '29', '30', '31', '32', '33'],
    'PIT_TEMPUDO_4': ['25', '26', '27', '28', '29', '30', '30B', '31']
};

// ==================== AVAILABLE MATERIALS ====================
const availableMaterials = [
    { value: "CLAYSTONE", name: "Claystone", description: "Batuan sedimen dengan kandungan clay tinggi" },
    { value: "SILTSTONE", name: "Siltstone", description: "Batuan sedimen dengan ukuran partikel silt" },
    { value: "SANDSTONE", name: "Sandstone", description: "Batuan sedimen dengan butiran sand" },
    { value: "FINE_SANDSTONE", name: "Fine Sandstone", description: "Batuan pasir dengan butiran halus" },
    { value: "MEDIUM_SANDSTONE", name: "Medium Sandstone", description: "Batuan pasir dengan butiran sedang" }
];

// ==================== HELPER FUNCTIONS ====================
function getRecommendation(pit, seam, material) {
    // Buat key sesuai format database
    const key = `${pit}_${seam}_${material}`;
    
    // Cari di database
    if (recommendationDB[key]) {
        return recommendationDB[key];
    }
    
    // Jika tidak ditemukan, coba gunakan default berdasarkan material
    const defaultKey = `default_${material}`;
    if (recommendationDB[defaultKey]) {
        console.warn(`Data tidak ditemukan untuk ${key}, menggunakan default ${material}`);
        return recommendationDB[defaultKey];
    }
    
    // Fallback terakhir
    console.warn(`Data tidak ditemukan untuk ${key}, menggunakan default general`);
    return { pf: 0.14, burden: 8.5, spacing: 10.0 };
}

function getMaterialName(value) {
    const material = availableMaterials.find(m => m.value === value);
    return material ? material.name : value;
}

function getPitName(value) {
    const pit = availablePITs.find(p => p.value === value);
    return pit ? pit.name : value;
}

// ==================== EXPORT FUNCTIONS (untuk digunakan di HTML) ====================
// Jika menggunakan module, uncomment:
// export { 
//     recommendationDB, 
//     availablePITs, 
//     seamMapping, 
//     availableMaterials,
//     getRecommendation,
//     getMaterialName,
//     getPitName
// };
