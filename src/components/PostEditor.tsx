"use client"
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Copy, Wand2 } from "lucide-react";

const MAX_CHARS = 3000;

const PostEditor = () => {
  const [content, setContent] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newContent = e.target.value;
    if (newContent.length <= MAX_CHARS) {
      setContent(newContent);
    }
  };

  const generateSuggestion = async () => {
    setIsGenerating(true);
    // Simulated AI response for now
    setTimeout(() => {
      const suggestion =
        "I'm excited to share that I've been working on an innovative project using AI technology to revolutionize content creation. #Innovation #AI #Technology";
      setContent(suggestion);
      setIsGenerating(false);
      toast.success("Generated new content!");
    }, 1000);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(content);
    toast.success("Copied to clipboard!");
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-4">
      <div className="bg-white rounded-lg shadow-lg p-6 space-y-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold text-gray-800">Create Your LinkedIn Post</h2>
          <span className="text-sm text-gray-500">
            {content.length}/{MAX_CHARS}
          </span>
        </div>

        <Textarea
          value={content}
          onChange={handleContentChange}
          placeholder="What do you want to share?"
          className="min-h-[200px] resize-none border-linkedin-border focus:border-linkedin-primary"
        />

        <div className="flex justify-between items-center pt-4">
          <Button
            onClick={generateSuggestion}
            disabled={isGenerating}
            className="bg-linkedin-primary hover:bg-linkedin-hover text-white"
          >
            <Wand2 className="mr-2 h-4 w-4" />
            {isGenerating ? "Generating..." : "Generate with AI"}
          </Button>

          <Button
            onClick={copyToClipboard}
            variant="outline"
            className="border-linkedin-border hover:bg-linkedin-light"
          >
            <Copy className="mr-2 h-4 w-4" />
            Copy to Clipboard
          </Button>
        </div>
      </div>

      {content && (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Preview</h3>
          <div className="prose max-w-none">
            {content.split("\n").map((line, i) => (
              <p key={i} className="mb-4 text-gray-700">
                {line}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PostEditor;
