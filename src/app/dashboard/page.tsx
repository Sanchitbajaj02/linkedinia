import PostEditor from "@/components/PostEditor";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-linkedin-primary mb-2">LinkedinIA</h1>
        <p className="text-gray-600">Create engaging LinkedIn posts with AI assistance</p>
      </div>
      <PostEditor />
    </div>
  );
};

export default Dashboard;
