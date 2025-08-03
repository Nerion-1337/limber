export const research_default = ({ data_default, update_data, search }) => {
  // Si pas de terme de recherche, retourner toutes les données
  if (!search || search.trim() === "") {
    update_data(data_default);
    return;
  }

  // Convertir le terme de recherche en minuscules pour une recherche insensible à la casse
  const term = search.trim().toLowerCase();

  const filteredData = data_default.filter((item) => {
    // Parcourir toutes les clés de l'objet
    for (let key in item) {
      if (item.hasOwnProperty(key)) {
        const value = item[key];

        // Si c'est un tableau (comme tags)
        if (Array.isArray(value)) {
          const foundInArray = value.some((arrayItem) => {
            // Si l'élément du tableau est un string
            if (typeof arrayItem === "string") {
              return arrayItem.toLowerCase().includes(term);
            }
            // Si l'élément du tableau est un number, le convertir en string
            if (typeof arrayItem === "number") {
              return arrayItem.toString().includes(term);
            }
            return false;
          });
          if (foundInArray) return true;
        }

        // Si c'est un string
        else if (typeof value === "string") {
          if (value.toLowerCase().includes(term)) {
            return true;
          }
        }

        // Si c'est un number, le convertir en string
        else if (typeof value === "number") {
          const numberAsString = value.toString();
          if (numberAsString.includes(term)) {
            return true;
          }
        }
      }
    }

    // Aucune correspondance trouvée
    return false;
  });

  // Mettre à jour les données filtrées avec la fonction set
  update_data(filteredData);
};
