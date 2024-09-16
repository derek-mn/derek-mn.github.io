document.addEventListener('DOMContentLoaded', function() {
    // Initialize the first tab to be open
    document.querySelector(".tablink").click();

    // Fetch course data from JSON file
    fetch('courses.json')
        .then(response => response.json())
        .then(data => {
            populateTabs(data);
        })
        .catch(error => console.error('Error loading courses:', error));
});

function populateTabs(data) {
    Object.keys(data).forEach(tabName => {
        let tabContent = document.getElementById(tabName);
        if (tabContent) {
            let courses = data[tabName];
            let contentHtml = '<div class="courses-grid">';
            courses.forEach(column => {
                contentHtml += '<div class="course-column"><ul>';
                column.forEach(course => {
                    contentHtml += `<li>${course}</li>`;
                });
                contentHtml += '</ul></div>';
            });
            contentHtml += '</div>';
            tabContent.innerHTML = contentHtml;
        }
    });
}

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Parallax Scrolling Effect
document.addEventListener('scroll', function() {
    var parallaxElements = document.querySelectorAll('.parallax');
    parallaxElements.forEach(function(el) {
        var speed = el.getAttribute('data-speed');
        el.style.backgroundPositionY = -(window.scrollY * speed) + 'px';
    });
});
