<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title><?=$page_title?></title>

    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script src="/react/scripts/app.js"></script>
</head>

<body>
    <div id="root"></div>

    <input type="hidden" name="dataRoot" value="<?=$view_name;?>">
    <input type="hidden" name="_token" value="<?=$_token;?>">

    <script type="text/babel" src="/react/view/components/pageComponent.jsx"></script>
    <script type="text/babel" src="/react/view/main-components/<?=$view_name;?>.jsx"></script>
</body>
</html>