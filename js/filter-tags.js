// place script in iife
(function ()
{
  // Store all Images
  var $imgs = $("#gallery img");
  // Store button element
  var $buttons = $("#buttons");
  // Create tagged object
  var tagged = {};

  // loop through images
  $imgs.each(function ()
  {
    // Store img in variable
    var img = this;

    // Get this element's tags
    var tags = $(this).data("tags");

    // if the element had tags
    if (tags)
    {
      // split at comma.
      tags.split(",").forEach(function (tagName)
      {
        // if object doesn't have tag, add empty array to object
        if (tagged[tagName] == null)
        {
          tagged[tagName] = [];
        }
        // Add the image to the array
        tagged[tagName].push(img);
      });
    }
  });

  // Create empty button
  $("<button/>",
  {
    // Add text "Show All"
    text: "Show All",
    // Make it active
    class: "active",
    // Add onclick handler to button
    click: function()
    {
      // get the clicked on button
      $(this)
      // Add the class of active
      .addClass()
      //Get its siblings
      .siblings()
      // Remove the active class from them.
      .removeClass("active");
      $imgs.show();
    }
    // Add to buttons
  }).appendTo($buttons);

  // For each tag name
  $.each(tagged, function(tagName)
  {
    // Create empty button
    $("<button/>",
    {
      // Add tag name
      text: tagName + " (" + tagged[tagName].length + ")",
      // Add click handler
      click: function()
      {
        // The button that was clicked on
        $(this)
        // Make active
        .addClass("active")
        // Get its siblings
        .siblings()
        // Remove active from them
        .removeClass("active");
        // With all the Images
        $imgs
        // Hide them
        .hide()
        // Find ones with this tag
        .filter(tagged[tagName])
        // Show just those images
        .show();
      }
      // Add to the buttons
    }).appendTo($buttons);
  });
}());
