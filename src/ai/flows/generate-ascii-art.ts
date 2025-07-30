'use server';

/**
 * @fileOverview Generates ASCII art from an image using a Genkit flow.
 *
 * - generateAsciiArt - A function that generates ASCII art from an image.
 * - GenerateAsciiArtInput - The input type for the generateAsciiArt function.
 * - GenerateAsciiArtOutput - The return type for the generateAsciiArt function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateAsciiArtInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      'A photo to convert to ASCII art, as a data URI that must include a MIME type and use Base64 encoding. Expected format: \'data:<mimetype>;base64,<encoded_data>\'.' 
    ),
});
export type GenerateAsciiArtInput = z.infer<typeof GenerateAsciiArtInputSchema>;

const GenerateAsciiArtOutputSchema = z.object({
  asciiArt: z.string().describe('The generated ASCII art.'),
});
export type GenerateAsciiArtOutput = z.infer<typeof GenerateAsciiArtOutputSchema>;

export async function generateAsciiArt(
  input: GenerateAsciiArtInput
): Promise<GenerateAsciiArtOutput> {
  return generateAsciiArtFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateAsciiArtPrompt',
  input: {schema: GenerateAsciiArtInputSchema},
  output: {schema: GenerateAsciiArtOutputSchema},
  prompt: `You are an AI that converts images to ASCII art.  Take the photo and convert it to ASCII art.

Photo: {{media url=photoDataUri}}

Output only the ASCII art, nothing else.  Make sure the aspect ratio of the image is preserved.  Each line should be no more than 80 characters.  Be creative, and make sure to add visual details even if they are not visible in the source photo.  This ASCII art will be displayed in a terminal, so use standard ASCII characters.
`,
});

const generateAsciiArtFlow = ai.defineFlow(
  {
    name: 'generateAsciiArtFlow',
    inputSchema: GenerateAsciiArtInputSchema,
    outputSchema: GenerateAsciiArtOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
