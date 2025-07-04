<?php
$secret_token = "my-secret-token";

// Validate token
if (!isset($_GET['token']) || $_GET['token'] !== $secret_token) {
    http_response_code(403);
    echo "Forbidden: Invalid token.";
    exit;
}

// Set content type for better formatting
header('Content-Type: text/plain');

// Echo header
echo "=== Starting Deployment ===\n";

// Run deploy script and stream output
$cmd = '/bin/bash /www/wwwroot/beta.clearmymind.com/deploy-bitbucket.sh 2>&1';
passthru($cmd);

echo "\n=== Deployment Finished ===";

?>