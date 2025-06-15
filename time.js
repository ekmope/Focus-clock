// 在原有代码后添加以下功能实现
// ==============================
// 获取选择的提醒类型
function getSelectedReminderType() {
    return document.querySelector('input[name="reminder-type"]:checked').value;
}

// 获取休息提醒类型
function getSelectedRestReminderType() {
    return document.querySelector('input[name="rest-reminder-type"]:checked').value;
}

// 切换到休息模式
function switchToRestMode() {
    isFocusMode = false;
    currentTime = 0;
    totalTime = parseInt(restTimeSlider.value) * 60;
    sessionInfo.textContent = `休息中 - 第 ${sessionCount} 周期后`;
    updateDisplay();
    
    // 播放提醒音
    if (soundEnable.checked) {
        const soundType = soundSelect.value;
        sounds[soundType].play();
    }
    
    // 震动提醒
    if (vibrateEnable.checked && navigator.vibrate) {
        navigator.vibrate([200, 100, 200]);
    }
    
    // 如果是弹出提示类型，显示通知
    if (getSelectedRestReminderType() === 'popup') {
        notificationMessage.textContent = "专注周期结束，请休息20分钟";
        notification.classList.remove('hidden');
        setTimeout(() => {
            notificationContent.classList.add('scale-95', 'opacity-0');
            setTimeout(() => {
                notificationContent.classList.remove('scale-95', 'opacity-0');
                notification.classList.add('hidden');
            }, 300);
        }, 5000);
    }
}

// 切换到专注模式
function switchToFocusMode() {
    isFocusMode = true;
    currentTime = 0;
    sessionCount++;
    totalTime = parseInt(focusTimeSlider.value) * 60;
    sessionInfo.textContent = `专注中 - 第 ${sessionCount + 1} 周期`;
    
    // 设置下一个随机提醒
    const min = parseInt(minIntervalSlider.value);
    const max = parseInt(maxIntervalSlider.value);
    nextRandomReminder = Math.floor(Math.random() * (max - min + 1)) + min;
    
    updateDisplay();
}

// 显示随机提醒通知
function showNotification() {
    pauseTimer();
    notificationMessage.textContent = notificationText.value || "闭上眼睛休息10秒钟，然后继续专注...";
    notification.classList.remove('hidden');
    
    // 播放提醒音
    if (soundEnable.checked) {
        const soundType = soundSelect.value;
        sounds[soundType].play();
    }
    
    // 震动提醒
    if (vibrateEnable.checked && navigator.vibrate) {
        navigator.vibrate([200, 100, 200]);
    }
}

// 关闭通知
function closeNotification() {
    notificationContent.classList.add('scale-95', 'opacity-0');
    setTimeout(() => {
        notificationContent.classList.remove('scale-95', 'opacity-0');
        notification.classList.add('hidden');
        startTimer(); // 继续计时
    }, 300);
}

// 添加历史记录
function addHistoryEntry() {
    const now = new Date();
    const entry = {
        id: Date.now(),
        date: now.toISOString().split('T')[0],
        startTime: now.toLocaleTimeString(),
        duration: parseInt(focusTimeSlider.value),
        session: sessionCount
    };
    
    history.unshift(entry);
    updateHistory();
}

// 更新历史记录显示
function updateHistory() {
    if (history.length === 0) {
        historyList.innerHTML = `
            <div class="bg-neutral-light rounded-lg p-4">
                <div class="flex justify-between items-center">
                    <div>
                        <p class="font-medium">今日暂无记录</p>
                        <p class="text-sm text-gray-500">开始专注后，记录将显示在这里</p>
                    </div>
                </div>
            </div>
        `;
        return;
    }
    
    const today = new Date().toISOString().split('T')[0];
    const todayEntries = history.filter(entry => entry.date === today);
    
    if (todayEntries.length === 0) {
        historyList.innerHTML = `
            <div class="bg-neutral-light rounded-lg p-4">
                <div class="flex justify-between items-center">
                    <div>
                        <p class="font-medium">今日暂无记录</p>
                        <p class="text-sm text-gray-500">开始专注后，记录将显示在这里</p>
                    </div>
                </div>
            </div>
        `;
        return;
    }
    
    historyList.innerHTML = todayEntries.map(entry => `
        <div class="bg-white rounded-lg p-4 border border-gray-200">
            <div class="flex justify-between items-center">
                <div>
                    <p class="font-medium">专注周期 #${entry.session}</p>
                    <p class="text-sm text-gray-500">${entry.startTime} | ${entry.duration}分钟</p>
                </div>
                <span class="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">完成</span>
            </div>
        </div>
    `).join('');
}

// 补全tick函数
function tick() {
    currentTime++;
    updateDisplay();
    
    // 检查是否需要随机提醒
    if (isFocusMode && currentTime >= nextRandomReminder) {
        showNotification();
        
        // 设置下一个随机提醒
        if (getSelectedReminderType() === 'random') {
            const min = parseInt(minIntervalSlider.value);
            const max = parseInt(maxIntervalSlider.value);
            nextRandomReminder = currentTime + Math.floor(Math.random() * (max - min + 1)) + min;
        } else {
            nextRandomReminder = currentTime + parseInt(minIntervalSlider.value);
        }
    }
    
    // 检查是否完成一个周期
    if (currentTime >= totalTime) {
        if (isFocusMode) {
            // 完成专注周期，开始休息
            addHistoryEntry();
            
            if (getSelectedRestReminderType() === 'auto') {
                switchToRestMode();
            } else {
                pauseTimer();
                notificationMessage.textContent = "专注周期结束，请休息20分钟";
                notification.classList.remove('hidden');
            }
        } else {
            // 休息结束，回到专注模式
            switchToFocusMode();
        }
    }
}