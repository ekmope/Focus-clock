<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>随机专注计时器 - README</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }
        h1, h2, h3 {
            color: #1a1a1a;
            margin-top: 1.5em;
            margin-bottom: 0.5em;
        }
        h1 {
            font-size: 2.5em;
            border-bottom: 1px solid #eaecef;
            padding-bottom: 0.3em;
        }
        h2 {
            font-size: 1.75em;
            border-bottom: 1px solid #eaecef;
            padding-bottom: 0.3em;
        }
        h3 {
            font-size: 1.25em;
        }
        p {
            margin-bottom: 1em;
        }
        ul, ol {
            margin-bottom: 1em;
            padding-left: 2em;
        }
        li {
            margin-bottom: 0.5em;
        }
        code {
            font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
            font-size: 85%;
            background-color: rgba(27,31,35,0.05);
            padding: 0.2em 0.4em;
            border-radius: 3px;
        }
        pre {
            background-color: #f6f8fa;
            padding: 1em;
            border-radius: 3px;
            overflow-x: auto;
        }
        pre code {
            background: none;
            padding: 0;
            font-size: 100%;
        }
        table {
            border-collapse: collapse;
            width: 100%;
            margin-bottom: 1em;
        }
        th, td {
            border: 1px solid #dfe2e5;
            padding: 0.65em 1em;
        }
        th {
            background-color: #f6f8fa;
            text-align: left;
        }
        img {
            max-width: 100%;
            height: auto;
            margin: 1em 0;
        }
        a {
            color: #0366d6;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
        .badge {
            display: inline-block;
            padding: 0.25em 0.4em;
            font-size: 75%;
            font-weight: 700;
            line-height: 1;
            text-align: center;
            white-space: nowrap;
            vertical-align: baseline;
            border-radius: 0.25rem;
            margin-right: 0.5em;
        }
        .badge-primary {
            background-color: #536af5;
            color: white;
        }
        .badge-success {
            background-color: #2ba97a;
            color: white;
        }
        .badge-blue {
            background-color: #0366d6;
            color: white;
        }
        .badge-green {
            background-color: #28a745;
            color: white;
        }
    </style>
</head>
<body>
    <h1>随机专注计时器</h1>

    <p><img src="https://cdn-icons-png.flaticon.com/512/3330/3330312.png" alt="专注计时器" /></p>

    <p>
        <span class="badge badge-primary"><a href="#" style="color: white;">🕒 在线使用-随机专注计时器</a></span>
        <span class="badge badge-success"><a href="#" style="color: white;">📱 响应式设计-移动设备友好</a></span>
        <span class="badge badge-blue">技术栈-HTML5/CSS3/JavaScript</span>
        <span class="badge badge-green">开源协议-MIT</span>
    </p>

    <h2>目录</h2>
    <ul>
        <li><a href="#项目介绍">项目介绍</a></li>
        <li><a href="#核心功能">核心功能</a></li>
        <li><a href="#使用指南">使用指南</a></li>
        <li><a href="#高级设置">高级设置</a></li>
        <li><a href="#技术细节">技术细节</a></li>
        <li><a href="#设计理念">设计理念</a></li>
        <li><a href="#许可协议">许可协议</a></li>
    </ul>

    <h2 id="项目介绍">项目介绍</h2>
    <p>随机专注计时器 是一款基于科学时间管理理念设计的效率工具，帮助用户通过随机间隔提醒和专注周期管理提升学习/工作效率。应用结合了番茄工作法的原理和随机休息提醒机制，有效防止注意力疲劳，提高专注质量。</p>
    <p><img src="screenshot.png" alt="截图" width="70%"></p>

    <h2 id="核心功能">核心功能</h2>

    <h3>专注管理</h3>
    <ul>
        <li>🎯 随机提醒机制：在专注期间随机时间点提醒短暂休息（3-5分钟）</li>
        <li>⏱️ 专注周期管理：默认90分钟专注+20分钟休息的科学周期</li>
        <li>📊 进度可视化：实时进度条显示专注完成情况</li>
    </ul>

    <h3>个性化设置</h3>
    <ul>
        <li>⚙️ 灵活时间配置：可调整专注时长、休息时长和随机间隔</li>
        <li>🔔 多重提醒方式：声音提醒、震动提醒（支持设备）和视觉提示</li>
        <li>📝 自定义提醒文本：个性化设置休息提醒内容</li>
    </ul>

    <h3>数据追踪</h3>
    <ul>
        <li>📅 专注历史记录：自动保存每日专注周期数据</li>
        <li>🏆 成就系统：显示完成周期数和总专注时间</li>
    </ul>

    <h2 id="使用指南">使用指南</h2>

    <h3>基础操作</h3>
    <ol>
        <li>开始专注：点击"开始"按钮启动计时器</li>
        <li>随机休息：收到提醒后闭眼休息10秒钟</li>
        <li>周期休息：完成专注周期后休息指定时间</li>
        <li>查看记录：在历史记录区域查看专注成果</li>
    </ol>

    <h3>界面说明</h3>
    <table>
        <tr>
            <th>区域</th>
            <th>功能描述</th>
        </tr>
        <tr>
            <td>计时器显示</td>
            <td>显示当前剩余时间（分钟:秒）</td>
        </tr>
        <tr>
            <td>进度条</td>
            <td>直观展示当前周期完成进度</td>
        </tr>
        <tr>
            <td>控制按钮</td>
            <td>开始/暂停/重置计时器</td>
        </tr>
        <tr>
            <td>设置面板</td>
            <td>调整专注参数和提醒设置</td>
        </tr>
        <tr>
            <td>历史记录</td>
            <td>查看当日完成的专注周期</td>
        </tr>
    </table>

    <h2 id="高级设置">高级设置</h2>

    <h3>专注参数配置</h3>
    <pre><code>javascript
// 最大随机间隔（30秒-5分钟）
maxIntervalSlider.value = 300; // 单位：秒

// 专注周期时长（30-120分钟）
focusTimeSlider.value = 90; // 单位：分钟

// 休息时长（5-30分钟）
restTimeSlider.value = 20; // 单位：分钟
</code></pre>

    <h3>提醒设置</h3>
    <table>
        <tr>
            <th>选项</th>
            <th>功能描述</th>
        </tr>
        <tr>
            <td>声音提醒</td>
            <td>开启/关闭声音提示（支持多种提示音）</td>
        </tr>
        <tr>
            <td>震动提醒</td>
            <td>在支持设备上启用震动提示</td>
        </tr>
        <tr>
            <td>提醒类型</td>
            <td>选择随机提醒或固定间隔提醒</td>
        </tr>
        <tr>
            <td>休息提醒方式</td>
            <td>弹出提示或自动切换模式</td>
        </tr>
    </table>

    <h3>自定义提醒文本</h3>
    <pre><code>html
&lt;textarea id="notification-text"&gt;闭上眼睛休息10秒钟，然后继续专注...&lt;/textarea&gt;
</code></pre>

    <h2 id="技术细节">技术细节</h2>

    <h3>核心实现</h3>
    <ul>
        <li>时间管理算法：双模式计时器（专注/休息）与随机提醒机制</li>
        <li>响应式设计：Tailwind CSS 实现全设备适配</li>
        <li>本地存储：使用localStorage保存专注历史记录</li>
    </ul>

    <h3>技术栈</h3>
    <table>
        <tr>
            <th>技术</th>
            <th>用途</th>
        </tr>
        <tr>
            <td>HTML5</td>
            <td>应用结构</td>
        </tr>
        <tr>
            <td>Tailwind CSS</td>
            <td>响应式UI设计</td>
        </tr>
        <tr>
            <td>JavaScript</td>
            <td>计时器逻辑与交互</td>
        </tr>
        <tr>
            <td>Web Audio API</td>
            <td>声音提醒功能</td>
        </tr>
        <tr>
            <td>Vibration API</td>
            <td>设备震动提醒</td>
        </tr>
    </table>

    <h3>性能优化</h3>
    <ul>
        <li>轻量级设计（单文件应用）</li>
        <li>硬件加速动画</li>
        <li>按需资源加载</li>
    </ul>

    <h2 id="设计理念">设计理念</h2>

    <h3>科学依据</h3>
    <ul>
        <li>随机休息机制：基于注意力恢复理论，随机短暂休息比固定间隔更有效</li>
        <li>90分钟周期：匹配人体自然的注意力周期（超昼夜节律）</li>
        <li>10秒闭眼休息：短暂闭眼可显著缓解视觉疲劳和认知负荷</li>
    </ul>

    <h3>UI/UX原则</h3>
    <ul>
        <li>视觉反馈：专注/休息模式使用不同色彩方案</li>
        <li>渐进式展示：高级设置默认隐藏，减少认知负担</li>
        <li>无障碍设计：高对比度文本和清晰的操作反馈</li>
    </ul>

    <h2 id="许可协议">许可协议</h2>
    <p>本项目采用 MIT License，核心条款包括：</p>
    <ul>
        <li>允许自由使用、修改和分发</li>
        <li>保留原始版权声明</li>
        <li>免责条款</li>
    </ul>
    <p>温馨提示：本工具作为辅助效率工具，请根据个人情况调整专注时长，避免过度使用影响健康。</p>
</body>
</html>
