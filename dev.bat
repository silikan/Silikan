@echo on
start  mailhog
@echo Server started successfully
@echo on
start  redis-cli && MONITOR
@echo Server started successfully
@echo on
cd ./server
start  code .
@echo Server started successfully

@echo on
cd ./server
start  php artisan serve
@echo Server started successfully


@echo on
cd ./server
start  npm run chat
@echo Chat started successfully


@echo on
cd ./server
start  npm run notification
@echo Notification started successfully


@echo on
cd ../client
start  npm run serve
@echo Client started successfully

@echo on
cd ./client
start  code .
@echo Server started successfully
