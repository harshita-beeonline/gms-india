FROM node:20-alpine
ENV NODE_ENV=production
WORKDIR /code
COPY . /code/
RUN npm install -g pnpm
RUN pnpm install
RUN pnpm run build
CMD ["pnpm", "run", "start"]