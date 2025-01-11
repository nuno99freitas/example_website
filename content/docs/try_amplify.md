+++
date = '2024-11-25T12:03:59Z'
draft = false
title = 'Amplify'
weight = 11
+++
<!-- <h1 class="page-title"> Galeria </h1> -->
<div class="top_box"> </div>

<script>
import Amplify, { API } from 'aws-amplify';

Amplify.configure({
    API: {
        endpoints: [
            {
                name: "MyApiName",
                endpoint: "https://your-api-url.amazonaws.com/dev"
            }
        ]
    }
});

// Fetch data
API.get("MyApiName", "/path").then(response => {
    console.log(response);
});
</script>