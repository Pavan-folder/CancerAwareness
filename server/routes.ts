import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Quote API endpoint - proxies Quotable API for inspirational quotes
  app.get("/api/quote", async (_req, res) => {
    try {
      const response = await fetch('https://api.quotable.io/random?tags=inspirational|wisdom|hope');
      if (!response.ok) {
        throw new Error('Failed to fetch quote from external API');
      }
      const quote = await response.json();
      res.json(quote);
    } catch (error) {
      console.error('Error fetching quote:', error);
      res.status(500).json({ error: 'Failed to fetch quote' });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
