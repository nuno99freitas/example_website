+++ 
date = '2024-11-25T12:30:16Z' 
draft = false 
title = 'Programação' 
type = 'docs' 
weight = 2 
+++
<div class="top_box"> 
  <!-- <h1 class="page-title">Programação</h1> -->    
  <div class="default_container" style="padding-top:10px">
      <div class="radio-button-group" position="relative">
          <input type="radio" id="todos" name="programacao" value="todos" checked>
          <label for="todos" class="filter-label">Todos</label>
          <input type="radio" id="rca" name="programacao" value="rca">
          <label for="rca" class="filter-label">RCA</label>
          <input type="radio" id="ed" name="programacao" value="ed">
          <label for="ed" class="filter-label">ED</label>
      </div>
  </div>
</div>

<!-- Preloaded Shortcode Content -->
<div id="schedule-content">
  <div id="todos-content" class="schedule-section">
    {{< print_schedule_v2 >}}
  </div>
  <div id="rca-content" class="schedule-section" style="display: none;">
    {{< print_schedule_rca >}}
  </div>
  <div id="ed-content" class="schedule-section" style="display: none;">
    {{< print_schedule_ed >}}
  </div>
</div>

<script>
    const radioButtons = document.querySelectorAll('input[name="programacao"]');
    radioButtons.forEach(radio => {
    radio.addEventListener('change', (event) => {
        const filter = event.target.value;

        // Hide all sections
        document.querySelectorAll('.schedule-section').forEach(section => {
        section.style.display = 'none';
        });

        // Show the selected section
        const selectedSection = document.getElementById(`${filter}-content`);
        if (selectedSection) {
        selectedSection.style.display = 'block';
        }
    });
    });
</script>

<style>
  .radio-button-group {
    display: flex;
    gap: 10px; /* Adds spacing between buttons */
  }

  /* Hide the default radio buttons */
  input[type="radio"] {
    position: absolute; /* Takes the radio button out of the flow */
    opacity: 0;         /* Makes it invisible */
  }

  /* Style the labels to look like buttons */
  .filter-label {
    display: inline-block; /* Ensures the label behaves like a button */
    padding: 10px 20px;
    border: 1px solid #ccc;
    background-color: #f9f9f9;
    cursor: pointer;
    font-size: 16px;
    border-radius: 5px;
    text-align: center;
    transition: background-color 0.3s, color 0.3s;
  }

  /* Highlight the selected radio button */
  input[type="radio"]:checked + .filter-label {
    background-color: #007bff;
    color: white;
    border-color: #007bff;
  }

  /* Hover effect for labels */
  .filter-label:hover {
    background-color: #0056b3;
    color: white;
  }
</style>
