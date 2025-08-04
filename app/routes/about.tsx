export default function About() {
  return (
    <div class="max-w-4xl mx-auto p-6">
      <div class="bg-white shadow-lg rounded-lg p-8">
        <h1 class="text-3xl font-bold text-center mb-8">简历 / Resume</h1>
        
        {/* 个人信息 */}
        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4 border-b-2 border-blue-500 pb-2">个人信息</h2>
          <div class="grid md:grid-cols-2 gap-4">
            <div>
              <p><strong>姓名:</strong> 您的姓名</p>
              <p><strong>职位:</strong> 前端开发工程师 / 全栈开发工程师</p>
              <p><strong>邮箱:</strong> your.email@example.com</p>
            </div>
            <div>
              <p><strong>电话:</strong> +86 138-xxxx-xxxx</p>
              <p><strong>地址:</strong> 您的地址</p>
              <p><strong>GitHub:</strong> <a href="#" class="text-blue-500 hover:underline">github.com/yourusername</a></p>
            </div>
          </div>
        </section>

        {/* 技能 */}
        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4 border-b-2 border-blue-500 pb-2">技能</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <h3 class="text-lg font-semibold mb-2">前端技术</h3>
              <ul class="list-disc list-inside space-y-1">
                <li>JavaScript / TypeScript</li>
                <li>React / Next.js</li>
                <li>Vue.js / Nuxt.js</li>
                <li>HTML5 / CSS3</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div>
              <h3 class="text-lg font-semibold mb-2">后端技术</h3>
              <ul class="list-disc list-inside space-y-1">
                <li>Node.js</li>
                <li>Hono.js</li>
                <li>Express.js</li>
                <li>数据库 (MySQL, PostgreSQL, MongoDB)</li>
                <li>云服务 (Cloudflare, AWS, Vercel)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 工作经验 */}
        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4 border-b-2 border-blue-500 pb-2">工作经验</h2>
          <div class="space-y-6">
            <div class="border-l-4 border-blue-500 pl-6">
              <h3 class="text-xl font-semibold">高级前端开发工程师</h3>
              <p class="text-gray-600 mb-2">某某科技公司 | 2022年1月 - 至今</p>
              <ul class="list-disc list-inside space-y-1 text-gray-700">
                <li>负责公司主要产品的前端开发和维护</li>
                <li>使用React和TypeScript构建高性能的单页应用</li>
                <li>与后端团队协作，设计和实现RESTful API</li>
                <li>优化应用性能，提升用户体验</li>
              </ul>
            </div>
            
            <div class="border-l-4 border-blue-500 pl-6">
              <h3 class="text-xl font-semibold">前端开发工程师</h3>
              <p class="text-gray-600 mb-2">ABC公司 | 2020年6月 - 2021年12月</p>
              <ul class="list-disc list-inside space-y-1 text-gray-700">
                <li>参与多个企业级Web应用的开发</li>
                <li>负责移动端H5页面的开发和适配</li>
                <li>使用Vue.js构建响应式用户界面</li>
                <li>参与代码审查和技术分享</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 项目经验 */}
        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4 border-b-2 border-blue-500 pb-2">项目经验</h2>
          <div class="space-y-6">
            <div class="bg-gray-50 p-6 rounded-lg">
              <h3 class="text-xl font-semibold mb-2">个人博客系统</h3>
              <p class="text-gray-600 mb-2">技术栈: Hono.js, React, TypeScript, Cloudflare</p>
              <p class="text-gray-700">基于Hono.js构建的全栈博客系统，支持Markdown写作，部署在Cloudflare Workers上。</p>
            </div>
            
            <div class="bg-gray-50 p-6 rounded-lg">
              <h3 class="text-xl font-semibold mb-2">电商管理系统</h3>
              <p class="text-gray-600 mb-2">技术栈: React, Next.js, TypeScript, Node.js</p>
              <p class="text-gray-700">为中小企业开发的电商管理系统，包含商品管理、订单管理、用户管理等功能模块。</p>
            </div>
          </div>
        </section>

        {/* 教育背景 */}
        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4 border-b-2 border-blue-500 pb-2">教育背景</h2>
          <div class="border-l-4 border-blue-500 pl-6">
            <h3 class="text-xl font-semibold">计算机科学与技术 学士</h3>
            <p class="text-gray-600">某某大学 | 2016年9月 - 2020年6月</p>
          </div>
        </section>

        {/* 返回首页按钮 */}
        <div class="text-center mt-12">
          <a 
            href="/" 
            class="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-200"
          >
            返回首页
          </a>
        </div>
      </div>
    </div>
  )
}
