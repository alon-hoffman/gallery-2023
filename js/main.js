'use strict';

$(renderProjects)



function renderProjects() {
  var projects = getProjects()
  var projectsHtml = projects.map(project =>
    `<div class="col-md-4 col-sm-6 portfolio-item" onclick="onChangeModal('${project.id}')">
        <a
          class="portfolio-link card"
          data-toggle="modal"
          href="#portfolioModal3"
        >
          <div class="portfolio-hover">
            <div class="portfolio-hover-content">
              <i class="fa fa-plus fa-3x"></i>
            </div>
          </div>
          <img
            class="img-fluid"
            src="img/portfolio/${project.id}.jpg"
            alt=""
          />
        </a>
        <div class="portfolio-caption">
          <h4>${project.name}</h4>
          <p class="text-muted">${project.title}</p>
        </div>
      </div>`
  )
  $('.projects').append(projectsHtml)

}

// $('.portfolio-modal h2').text("hii")



function onChangeModal(id) {
  const project = getProject(id)
  $('.btn-primary').click(function() {
    window.location.href = project.url;
  });
  $('.portfolio-modal h2').text(project.name)
  $('.portfolio-modal p').text(project.description)
  $('.portfolio-modal .item-intro').text(project.title)
//   console.log($('.portfolio-modal img').src)
  
  $('.portfolio-modal img').attr("src",`img/portfolio/${project.id}.jpg`)
}

$(function() {
    $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
      preventSubmit: true,
      submitError: function($form, event, errors) {
        // additional error messages or events
      },
      submitSuccess: function($form, event) {
        event.preventDefault(); // prevent default submit behaviour
        // get values from FORM
        var name = $("input#name").val();
        var email = $("input#email").val();
        var phone = $("input#phone").val();
        var message = $("textarea#message").val();
        var firstName = name; // For Success/Failure Message
        // Check for white space in name for Success/Fail
        if (firstName.indexOf(' ') >= 0) {
            firstName = name.split(' ').slice(0, -1).join(' ');
          }
          $.ajax({
            url: "././mail/contact_me.php",
            type: "POST",
            data: {
              name: name,
              phone: phone,
              email: email,
              message: message
            },
            cache: false,
            success: function() {
              // Success message
              $('#success').html("<div class='alert alert-success'>");
              $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                .append("</button>");
              $('#success > .alert-success')
                .append("<strong>Your message has been sent. </strong>");
              $('#success > .alert-success')
                .append('</div>');
              //clear all fields
              $('#contactForm').trigger("reset");
            },
            error: function() {
              // Fail message
              $('#success').html("<div class='alert alert-danger'>");
              $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                .append("</button>");
              $('#success > .alert-danger').append($("<strong>").text("Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!"));
              $('#success > .alert-danger').append('</div>');
              //clear all fields
              $('#contactForm').trigger("reset");
            },
          });
        },
        filter: function() {
          return $(this).is(":visible");
        },
      });
    
      $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
      });
    });
    