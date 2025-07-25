document.getElementById("searchForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const input = document.getElementById("searchInput");
  const value = input.value.trim();
  const error = document.getElementById("errorMessage");

  if (isMalicious(value)) {
    error.textContent = "Possible XSS detected. Please try again.";
    input.value = "";
    input.focus();
  } else {
    // URL encode and redirect
    window.location.href = "result.html?q=" + encodeURIComponent(value);
  }
});

// Basic XSS detection (blacklist-based, for demo purposes)
function isMalicious(str) {
  const pattern = /<|>|script|onerror|onload|javascript:/i;
  return pattern.test(str);
}
