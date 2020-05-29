- TP page clients

- Créer un enum state-client ACTIVE et INACTIVE
- Créer le model client et l'interface client-i (voir db.json)
- Créer le service clients
- Page clients
  - template-b
  - pipe total
  - directive state-directive
  - scss table-light et table-dark (.State-active $color-success) (.state-inactive $color-error)

- formulaires
- validation de formulaires
- passer des datas dans le route
- récupérer les datas avec ActivateRoute
- TP : partie delete(Observables chauds)
- TP : partie edit(passage de datas dans l'url) et ActivatedRoute pour récupérer les datas
  - sur page list orders ajouter icon edit
  - click sur cet icon = edit(item)
  - sur page list order ts, redirection vers la route orders/edit en passant item.id dans l'url avec router.navigate
  - orders routing module on crée la route edit (particularité : elle prend un paramètre id)
  créer le component edit order orders/pages/edit-order
  - sur cette page vous utilisez un template (a ou b)
  - sur cette page vous utilisez form-add-order en bindant l'unput item avec l'item qui correspond à l'id récupéré dans l'url
    - dans le ts de edit-order component récupérer l'id dans l'url
    - dans le ts de edit-order component utiliser la méthode getItemById du service orders (à écrire également)
  - quand l'utilisateur valide le formulaire, utiliser l'Output() clicked pour appeler une fonction update(item) dans edit component ts, qui elle va appeler la méthode update(item) de votre service (déjà écrite)
  - enfin, rediriger l'utilisateur vers la page orders
- TP : sous navigation dans une page avec routes enfants
- TP : exemple BehaviorSubject et Subject
