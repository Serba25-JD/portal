document.addEventListener('DOMContentLoaded', function() {
    initMenu();
    initButtons();
});

function initMenu() {
    function hamburgerMenu() {
        const hamburger = document.getElementById('menu-btn');
        const menu = document.getElementById('menu-mobile');
        hamburger.addEventListener('click', function() {
            const icon = hamburger.querySelector('i') || hamburger.querySelector('svg');
            const isClosed = menu.classList.contains('translate-y-[-300%]');
            if (isClosed) {
                menu.classList.toggle('translate-y-[-300%]');
                icon.setAttribute('data-feather', 'x');
            } else {
                menu.classList.toggle('translate-y-0');
                icon.setAttribute('data-feather', 'menu');
                menu.classList.toggle('translate-y-[-300%]');
            };
            feather.replace();
        });
    };
    hamburgerMenu();
    function bentoMenu() {
        const bento = document.getElementById('hide-btn');
        const sidebar = document.getElementById('sidebar');
        bento.addEventListener('click', function() {
            sidebar.classList.toggle('translate-x-0');
        });
    };
    bentoMenu();
};

function initButtons() {
    buttonLayout('payment', layoutPayment);
    buttonLayout('classmate', layoutClassMates);
    buttonLayout('plan-studi', layoutPlanStudy);
};

function buttonLayout(id, layoutFunction) {
    const button = document.getElementById(id);
    button.addEventListener('click', function() {
        showFunction(layoutFunction);
    });
};

function showFunction(functions) {
    checkButtonMenu();
    showLoader();
    setTimeout(() => {
       functions();
    }, 1200);
};

function checkButtonMenu() {
    const hamburger = document.getElementById('menu-btn');
    const menu = document.getElementById('menu-mobile');
    const icon = hamburger.querySelector('i') || hamburger.querySelector('svg');
    const isClosed = menu.classList.contains('translate-y-[-300%]');
    if(!isClosed) {
        menu.classList.toggle('translate-y-0');
        icon.setAttribute('data-feather', 'menu');
        menu.classList.toggle('translate-y-[-300%]');
        feather.replace();
    };
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('translate-x-0');

};

function showLoader() {
    const sidebar = document.getElementById('sidebar');
    const divContainer = document.createElement('div');
    divContainer.classList.add('absolute', 'min-w-full', 'min-h-screen', 'top-0', 'left-0', 'right-0', 'bottom-0', 'flex', 'items-center', 'justify-center', 'z-999999');
    divContainer.setAttribute('id', 'loader');
    const icon = document.createElement('i');
    icon.setAttribute('data-feather', 'loader');
    icon.classList.add('animate-spin');
    divContainer.appendChild(icon);
    setTimeout(() =>{
        sidebar.insertAdjacentElement('afterend', divContainer);
        feather.replace();
    }, 100);
    setTimeout(() => {
        const loader = document.getElementById('loader');
        loader.remove();
    }, 1000);
};

// Layout
function layoutPayment() {
    createContainer('flex flex-col gap-10 text-center py-10 px-5', 'payments');
    const section = document.getElementById('payments');
    const divButton = document.createElement('div');
    divButton.classList.add('flex', 'gap-5', 'justify-center');
    const dataButton = ['Genap', 'Ganjil'];
    dataButton.forEach(item => {
        const button = document.createElement('button');
        button.type = 'button';
        button.textContent = `Pembayaran 2025 ${item}`;
        button.classList.add('shadow-md', 'border-b-2', 'border-[var(--yellow)]', 'p-3', 'rounded-md', 'font-medium', 'text-sm', 'montserrat', 'cursor-pointer');
        divButton.appendChild(button);
    });
    const divContent = document.createElement('div');
    const h2 = document.createElement('h2');
    h2.classList.add('font-bold', 'text-lg', 'montserrat');
    h2.textContent = 'Daftar Biaya Termin 2025';
    const columns = [
        { key: 'no', label: 'No' },
        { key: 'kode', label: 'Kode' },
        { key: 'uraian', label: 'Uraian' },
        { key: 'nominal', label: 'Nominal' },
        { key: 'status', label: 'Status' }
    ];
    const data = [
        { no: 1, kode: '027', uraian: '2025 Genap - UKT. Termin 7', nominal: 'Rp. 781.500', status: true },
        { no: 2, kode: '028', uraian: '2025 Genap - UKT. Termin 8', nominal: 'Rp. 781.500', status: false },
        { no: 3, kode: '029', uraian: '2025 Genap - UKT. Termin 9', nominal: 'Rp. 781.500', status: false },
        { no: 4, kode: '030', uraian: '2025 Genap - UKT. Termin 10', nominal: 'Rp. 781.500', status: false },
        { no: 5, kode: '031', uraian: '2025 Genap - UKT. Termin 11', nominal: 'Rp. 781.500', status: false },
        { no: 6, kode: '032', uraian: '2025 Genap - UKT. Termin 12', nominal: 'Rp. 781.500', status: false }
    ];
    const footer = [
        {
            cols: [
                { text: 'Total Tagihan :', colspan: 3 },
                { text: 'Rp. 4.689.000' },
                { checkbox: true, label: 'Ingin bayar semua?' }
            ]
        },
        {
            cols: [
                { button: 'Lanjutkan pembayaran', colspan: 5 }
            ]
        }
    ];
    const table = createTable(columns, data, footer, 'payments');
    divContent.append(h2, table);
    section.append(divButton, divContent);
};

function layoutClassMates() {
    createContainer('py-10 px-5', 'classmates');
    const section = document.getElementById('classmates');
    const h2 = document.createElement('h2');
    h2.classList.add('font-bold', 'text-lg', 'montserrat', 'text-center');
    h2.textContent = 'Peserta Kelas';
    const button = document.createElement('button');
    button.type = 'button';
    button.classList.add('py-2', 'px-5', 'border-b-2', 'border-t-1', 'border-[var(--yellow)]', 'rounded-md', 'text-center', 'font-bold', 'montserrat', 'text-sm', 'py-2', 'px-5', 'w-3xs', 'cursor-pointer');
    button.textContent = 'Semester 2';
    const columns = [
        { key: 'no', label: 'No' },
        { key: 'matakuliah', label: 'Mata Kuliah' },
        { key: 'sks', label: 'SKS' },
        { key: 'kelas', label: 'Kelas' },
        { key: 'hari', label: 'Hari' },
        { key: 'quota', label: 'Quota' },
        { key: 'peserta', label: 'Peserta' }
    ];
    const data = [
        { no: 1, matakuliah: 'Rekayasa Perangkat Lunak', sks: 3, kelas: 'II TIF REG2A MALAM A', hari: 'Senin', quota: 30, peserta: 23 },
        { no: 2, matakuliah: 'Ekonomi Kreatif', sks: 3, kelas: 'II TIF REG2A MALAM A', hari: 'Selasa', quota: 30, peserta: 22 },
        { no: 3, matakuliah: 'Prinsip Animasi', sks: 3, kelas: 'II TIF REG2A MALAM A', hari: 'Rabu', quota: 30, peserta: 22 },
        { no: 4, matakuliah: 'Interaksi Manusia dan Komputer', sks: 3, kelas: 'II TIF REG2A MALAM A', hari: 'Kamis', quota: 30, peserta: 22 },
        { no: 5, matakuliah: 'Aplikasi Sosial Media', sks: 3, kelas: 'SP II TIF REG2A MALAM A', hari: '-', quota: 30, peserta: 22 },
    ];
    const footer = [
        {
            cols: [
                { text: 'Hasil ini masih dapat berubah sewaktu diperlukan', colspan: 7 },
            ]
        }
    ];
    const table = createTable(columns, data, footer, 'classmates');
    section.append(h2, button, table);
}

function layoutPlanStudy() {
    createContainer('py-10 px-5 flex flex-col gap-5', 'plan-studys');
    const section = document.getElementById('plan-studys');
    const h2 = document.createElement('h2');
    h2.classList.add('font-bold', 'text-lg', 'montserrat', 'text-center');
    h2.textContent = 'Rencana Studi';
    // Top
    const divContentTop = document.createElement('div');
    divContentTop.classList.add('flex', 'gap-2', 'justify-between', 'bg-[var(--blue)]', 'rounded-md', 'shadow-md', 'p-3', 'flex-wrap', 'text-center');
    const dataDivContentTop = [
        { 'title': 'Tahun Akademik', 'desc': '2025 Genap' },
        { 'title': 'IPS Sebelumnya', 'desc': '4.00' },
        { 'title': 'Beban SKS Sekarang', 'desc': '24 SKS' }
    ];
    dataDivContentTop.forEach(item => {
        const divDataContentTop = document.createElement('div');
        divDataContentTop.classList.add('flex-1', 'flex', 'items-center', 'flex', 'flex-col', 'gap-2', 'bg-[var(--white)]', 'rounded-md', 'p-2');
        const h3 = document.createElement('h3');
        h3.classList.add('montserrat', 'font-bold', 'text-base');
        h3.textContent = item.title;
        const p = document.createElement('p');
        p.classList.add('font-medium', 'text-sm');
        p.textContent = item.desc;
        divDataContentTop.append(h3, p);
        divContentTop.appendChild(divDataContentTop);
    });
    // Alert
    const divAlert = document.createElement('div');
    divAlert.classList.add('bg-red-50', 'p-2', 'rounded-md', 'shadow-md');
    const h3Alert = document.createElement('h3');
    h3Alert.classList.add('montserrat', 'font-bold', 'text-sm', 'text-red-400');
    h3Alert.textContent = 'Keterangan :';
    const pAlert = document.createElement('p');
    pAlert.classList.add('font-medium', 'text-sm', 'text-red-400');
    pAlert.textContent = 'Kartu Rencana Studi Anda Telah Disetujui oleh Dosen Pembimbing Akademik dan tidak dapat direvisi kembali. Selamat menjalankan perkuliahan Anda sesuai dengan jadwal yang telah tertera.';
    divAlert.append(h3Alert, pAlert);
    // Table
    const columns = [
        { key: 'no', label: 'No' },
        { key: 'kode', label: 'Kode' },
        { key: 'mata_kuliah', label: 'Mata Kuliah' },
        { key: 'sks', label: 'SKS' },
        { key: 'semester', label: 'Semester' },
        { key: 'dosen', label: 'Dosen' },
        { key: 'whatsapp_group', label: 'WhatsApp Group' },
        { key: 'ruang', label: 'Ruang' },
        { key: 'hari_waktu', label: 'Hari & Waktu' },
        { key: 'aksi', label: 'Aksi' },
    ];
    const data = [
        { no: 1, kode: 'TIF437240212', mata_kuliah:{
                title: 'Rekayasa Perangkat Lunak',
                class: 'Kelas : II TIF REG2A MALAM A'
            }, sks: 3, semester: 2, dosen: { 
                name: 'Randi Rian Putra, S.Kom., M.Kom.',
                number: '082285837669',
                status: true
            }, whatsapp_group: {
                link: 'https://chat.whatsapp.com/IkfIcSbJHCpDD1BoUOv1iO?mode=hq2tcla',
                status: true
            }, ruang: 'M.202A', hari_waktu: 'Senin & 19:00 - 20:30', aksi: [
                {
                    icon: 'calendar',
                    name_icon: 'Jadwal',
                    className: 'date-btn'
                }, 
                {
                    icon: 'file-text',
                    name_icon: 'RFS',
                    className: 'rfs-btn'
                },
                {
                    icon: 'pocket',
                    name_icon: 'Materi',
                    className: 'materi-btn',
                    status: false
                }
            ]
        },
        { no: 2, kode: 'TIF437240208', mata_kuliah:{
                title: 'Ekonomi Kreatif',
                class: 'Kelas : II TIF REG2A MALAM A'
            }, sks: 3, semester: 2, dosen: { 
                name: 'Hermansyah, S.Kom, M.Kom.',
                number: '081361660544',
                status: true
            }, whatsapp_group: {
                link: 'https://chat.whatsapp.com/GxORtURPTEo1kcL8dMc9dU?mode=gi_t',
                status: true
            }, ruang: 'M.202B', hari_waktu: 'Selasa & 19:00 - 20:30', aksi: [
                {
                    icon: 'calendar',
                    name_icon: 'Jadwal',
                    className: 'date-btn'
                }, 
                {
                    icon: 'file-text',
                    name_icon: 'RFS',
                    className: 'rfs-btn'
                },
                {
                    icon: 'pocket',
                    name_icon: 'Materi',
                    className: 'materi-btn',
                    status: false
                }
            ]
        },
        { no: 3, kode: 'TIF437240209', mata_kuliah:{
                title: 'Prinsip Animasi',
                class: 'Kelas : II TIF REG2A MALAM A'
            }, sks: 3, semester: 2, dosen: { 
                name: 'Muhammad Donni Lesmana Siahaan, S.Kom., M.Kom.',
                number: '081377421076',
                status: true
            }, whatsapp_group: {
                link: 'https://chat.whatsapp.com/JXxCTARrD45GrBWA0OMUSK',
                status: true
            }, ruang: '	M.202A', hari_waktu: 'Rabu & 19:00 - 20:30', aksi: [
                {
                    icon: 'calendar',
                    name_icon: 'Jadwal',
                    className: 'date-btn'
                }, 
                {
                    icon: 'file-text',
                    name_icon: 'RFS',
                    className: 'rfs-btn'
                },
                {
                    icon: 'pocket',
                    name_icon: 'Materi',
                    className: 'materi-btn',
                    status: false
                }
            ]
        },
        { no: 4, kode: 'TIF437240210', mata_kuliah:{
                title: 'Interaksi Manusia dan Komputer',
                class: 'Kelas : II TIF REG2A MALAM A'
            }, sks: 3, semester: 2, dosen: { 
                name: 'Hermansyah, S.Kom, M.Kom.',
                number: '081361660544',
                status: true
            }, whatsapp_group: {
                link: 'https://chat.whatsapp.com/DF8bU4k9TvX2rdvc7aJBoS?mode=hqctcla',
                status: true
            }, ruang: 'M.202A', hari_waktu: 'Kamis & 19:00 - 20:30', aksi: [
                {
                    icon: 'calendar',
                    name_icon: 'Jadwal',
                    className: 'date-btn'
                }, 
                {
                    icon: 'file-text',
                    name_icon: 'RFS',
                    className: 'rfs-btn'
                },
                {
                    icon: 'pocket',
                    name_icon: 'Materi',
                    className: 'materi-btn',
                    status: false
                }
            ]
        },
        { no: 5, kode: 'UPB0110041002', mata_kuliah:{
                title: 'Metafisika Ketuhanan',
                class: 'Kelas : II UPB MTF REG2A A (KULBER)'
            }, sks: 3, semester: 2, dosen: { 
                name: '',
                number: '',
                status: false
            }, whatsapp_group: {
                link: '',
                status: false
            }, ruang: 'A.301-302', hari_waktu: 'Jumat & 19:00 - 20:30', aksi: [
                {
                    icon: 'calendar',
                    name_icon: 'Jadwal',
                    className: 'date-btn'
                }, 
                {
                    icon: 'file-text',
                    name_icon: 'RFS',
                    className: 'rfs-btn'
                },
                {
                    icon: 'pocket',
                    name_icon: 'Materi',
                    className: 'materi-btn',
                    status: false
                }
            ]
        },
        { no: 6, kode: 'UPB0110041003', mata_kuliah:{
                title: 'Pengantar Bisnis dan Inovasi',
                class: 'Kelas : II UPB MTF REG2A A (KULBER)'
            }, sks: 3, semester: 2, dosen: { 
                name: '',
                number: '',
                status: false
            }, whatsapp_group: {
                link: '',
                status: false
            }, ruang: 'A.301-302', hari_waktu: 'Sabtu & 19:00 - 20:30', aksi: [
                {
                    icon: 'calendar',
                    name_icon: 'Jadwal',
                    className: 'date-btn'
                }, 
                {
                    icon: 'file-text',
                    name_icon: 'RFS',
                    className: 'rfs-btn'
                },
                {
                    icon: 'pocket',
                    name_icon: 'Materi',
                    className: 'materi-btn',
                    status: false
                }
            ]
        },
        { no: 7, kode: 'TIF437240211', mata_kuliah:{
                title: 'Aplikasi Sosial Media',
                class: 'Kelas : SP II TIF REG2A MALAM A'
            }, sks: 3, semester: 2, dosen: { 
                name: 'Sri Wahyuni, S.Kom., M.Kom.',
                number: '089644935278',
                status: true
            }, whatsapp_group: {
                link: '',
                status: false
            }, ruang: 'Non Kelas (Self Paced)', hari_waktu: '-', aksi: [
                {
                    icon: 'calendar',
                    name_icon: 'Jadwal',
                    className: 'date-btn'
                }, 
                {
                    icon: 'file-text',
                    name_icon: 'RFS',
                    className: 'rfs-btn'
                },
                {
                    icon: 'pocket',
                    name_icon: 'Materi',
                    className: 'materi-btn',
                    status: true    
                }
            ]
        },
    ];
    const footer = [
        {
            cols: [
                { text: 'Jumlah Kredit :', colspan: 3 },
                { text: '21' },
                { colspan: 6}
            ]
        }
    ];
    const table = createTable(columns, data, footer, 'plan-studys');
    // Informasi
    const divInformasi = document.createElement('div');
    divInformasi.classList.add('mt-5');
    const h3Informasi = document.createElement('h3');
    h3Informasi.classList.add('montserrat', 'font-medium', 'text-sm');
    h3Informasi.textContent = 'Panduan :';
    const pInformasi = document.createElement('p');
    pInformasi.classList.add('font-medium', 'text-sm');
    pInformasi.textContent = 'Untuk tampilan terbaik percetakan telah dicoba pada browser firefox dengan aturan berikut :';
    const dataInformasi = [ 'Kertas A4, Margin Atas/Kanan/Bawah/Kiri = 0.5"/0.3"/0.5"/0.3" (Inchi)', 'Skala (Scale) = Shrink To Fit' ];
    const ulInformasi = document.createElement('ul');
    dataInformasi.forEach(item => {
        const li = document.createElement('li');
        li.classList.add('list-disc', 'ml-5', 'font-medium', 'text-sm');
        li.textContent = item;
        ulInformasi.appendChild(li);
    });
    const aInformasi = document.createElement('a');
    aInformasi.href = '#';
    aInformasi.target = '_blank';
    aInformasi.textContent = 'Cetak KRS';
    aInformasi.classList.add('bg-[var(--yellow)]', 'py-1', 'px-2', 'rounded-md', 'shadow-md', 'mt-2', 'inline-block', 'font-medium', 'text-sm');
    divInformasi.append(h3Informasi, pInformasi, ulInformasi, aInformasi);
    section.append(h2, divContentTop, divAlert, table, divInformasi);
    const dateContainer = document.createElement('div');
    dateContainer.setAttribute('id', 'date-content');
    dateContainer.classList.add('mt-10');
    section.appendChild(dateContainer);
    layoutPlanStudyDateBtn();
    function layoutPlanStudyDateBtn() {
        document.querySelectorAll('.date-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                showLoader();
                const matkul = this.dataset.matkul;
                const kelas = this.dataset.kelas;
                const jadwal = this.dataset.jadwal;
                const container = document.getElementById('date-content');
                container.innerHTML = '';
                const h2 = document.createElement('h2');
                h2.classList.add('font-bold', 'text-lg', 'montserrat', 'text-center');
                h2.textContent = 'Jadwal Pertemuan';
                h2.setAttribute('id', 'date-title');
                setTimeout(() => {
                    container.appendChild(h2);
                }, 500)
                const divContainer = document.createElement('div');
                divContainer.classList.add('bg-[var(--blue)]', 'rounded-md', 'shadow-md', 'flex', 'gap-2', 'items-center', 'justify-between', 'w-full', 'p-5', 'text-center', 'mt-5');
                // Left
                const divContentLeft = document.createElement('div');
                divContentLeft.classList.add('bg-[var(--white)]', 'rounded-lg', 'p-2', 'flex-1');
                const h3Left = document.createElement('h3');
                h3Left.classList.add('montserrat', 'font-medium', 'text-base');
                h3Left.textContent = matkul;
                const pLeft = document.createElement('p');
                pLeft.classList.add('font-medium', 'text-sm');
                pLeft.textContent = kelas;
                divContentLeft.append(h3Left, pLeft);
                // Right
                const divContentRight = document.createElement('div');
                divContentRight.classList.add('bg-[var(--white)]', 'rounded-lg', 'p-2', 'flex-1');
                const h3Right = document.createElement('h3');
                h3Right.classList.add('montserrat', 'font-medium', 'text-base');
                h3Right.textContent = 'Jadwal Mengajar';
                const pRight = document.createElement('p');
                pRight.classList.add('font-medium', 'text-sm');
                pRight.textContent = jadwal;
                divContentRight.append(h3Right, pRight);
                divContainer.append(divContentLeft, divContentRight);
                setTimeout(() => {
                    scrollTo('date-title');
                    container.appendChild(divContainer);
                }, 500);
            })
        })
    };
};
// End Layout

// All Section
function scrollTo(id) {
    const tag = document.getElementById(id);
    tag.scrollIntoView({behavior: 'smooth'});
};

function clearSection(id) {
    const section = document.getElementById(id);
    if(section) return section.remove();
};

function createContainer(classList, id) {
    clearSection('content-aside');
    const contentAside = document.getElementById('content-aside');
    if(!contentAside) {
        const sectionAside = document.createElement('section');
        sectionAside.classList.add('bg-[var(--white)]', 'p-2', 'rounded-md', 'shadow-lg', 'md:ml-65', 'w-full', 'min-h-screen', 'border-l-2', 'border-[var(--yellow)]', 'border-t-2');
        sectionAside.setAttribute('id', 'content-aside');
        const div = document.createElement('div');
        div.className = classList;
        div.setAttribute('id', id);
        sectionAside.appendChild(div);
        const sidebar = document.getElementById('sidebar');
        sidebar.insertAdjacentElement('afterend', sectionAside);
    };
};

function createTable(columns, data, footer=[], containerId) {
    const div = document.createElement('div');
    div.classList.add('overflow-x-auto', "after:content-['Geser_Horizontal']", 'after:block', 'after:text-xs', 'after:text-gray-400', 'after:mt-2', 'after:mb-2', 'md:after:content-none', 'mt-2');
    const table = document.createElement('table');
    table.classList.add('w-full', 'rounded-md', 'shadow-md', 'border-2', 'overflow-hidden', 'border-[var(--yellow)]');
    const thead = document.createElement('thead');
    thead.classList.add('montserrat', 'font-normal', 'text-sm');
    const tr = document.createElement('tr');
    tr.classList.add('border-b-2', 'border-[var(--yellow)]', 'rounded-md', 'bg-[var(--blue)]');
    columns.forEach(col => {
        const th = document.createElement('th');
        th.classList.add('py-2', 'px-4', 'border-r-2', 'border-[var(--yellow)]');
        th.textContent = col.label;
        tr.appendChild(th);
    });
    thead.appendChild(tr);
    const tbody = document.createElement('tbody');
    tbody.classList.add('font-normal', 'text-sm');
    data.forEach(row => {
        const tr = document.createElement('tr');
        tr.classList.add('hover:bg-[var(--yellow)]', 'border-b-1', 'border-[var(--blue)]', 'rounded-md', 'shadow-lg', 'text-center');
        columns.forEach(col => {
            const td = document.createElement('td');
            td.classList.add('py-2', 'px-4', 'border-r-2', 'border-[var(--yellow)]');
            switch(col.key) {
                case 'status':
                    if (row[col.key]) {
                        td.textContent = 'Lunas';
                        td.classList.add('text-[var(--blue)]', 'font-medium', 'text-sm');
                    } else {
                        const input = document.createElement('input');
                        input.type = 'checkbox';
                        td.appendChild(input);
                    };
                break;
                case 'mata_kuliah':
                    const divMK = document.createElement('div');
                    divMK.classList.add('text-left', 'font-medium', 'text-sm', 'flex', 'flex-col', 'gap-2', 'items-start');
                    const h3MK = document.createElement('h3');
                    h3MK.textContent = row.mata_kuliah.title;
                    const pMK = document.createElement('p');
                    pMK.textContent = row.mata_kuliah.class;
                    divMK.append(h3MK, pMK);
                    td.appendChild(divMK);
                break;
                case 'dosen':
                    if(!row.dosen.status) break;
                    const divDs = document.createElement('div');
                    divDs.classList.add('text-left', 'font-medium', 'text-sm', 'flex', 'flex-col', 'gap-2', 'items-start');
                    const h3Ds = document.createElement('h3');
                    h3Ds.textContent = row.dosen.name;
                    const pDs = document.createElement('p');
                    pDs.classList.add('flex', 'items-center', 'gap-2');
                    pDs.textContent = row.dosen.number;
                    const buttonDs = document.createElement('button');
                    buttonDs.type = 'button';
                    buttonDs.classList.add('wa-btn', 'cursor-pointer');
                    buttonDs.setAttribute('data_no', row.dosen.number);
                    const iconDs = document.createElement('i');
                    iconDs.setAttribute('data-feather', 'copy');
                    buttonDs.appendChild(iconDs);
                    pDs.appendChild(buttonDs);
                    divDs.append(h3Ds, pDs);
                    td.appendChild(divDs);
                break;
                case 'whatsapp_group':
                    const divWG = document.createElement('div');
                    divWG.classList.add('flex', 'flex-col', 'gap-2', 'text-green-500', 'items-center');
                    const iconWg = document.createElement('i');
                    iconWg.setAttribute('data-feather', 'users');
                    if(row.whatsapp_group.status && row.whatsapp_group.link) {
                        const aWG = document.createElement('a');
                        aWG.href = row.whatsapp_group.link;
                        aWG.target = '_blank';
                        aWG.appendChild(iconWg);
                        divWG.appendChild(aWG);
                    } else {
                        iconWg.classList.add('text-black', 'opacity-40');
                        divWG.appendChild(iconWg);
                    };
                    td.appendChild(divWG);
                break;
                case 'aksi':
                    const divAksi = document.createElement('div');
                    divAksi.classList.add('flex', 'flex-col', 'gap-5', 'items-start', 'justify-center');
                    row.aksi
                    .filter(item => item.status !== false)
                    .forEach(item => {
                        const button = document.createElement('button');
                        button.type = 'button';
                        button.classList.add('cursor-pointer', 'flex', 'items-center', 'gap-2', item.className);
                        button.dataset.matkul = row.mata_kuliah.title;
                        button.dataset.kelas = row.mata_kuliah.class;
                        button.dataset.jadwal = row.hari_waktu;
                        const icon = document.createElement('i');
                        icon.setAttribute('data-feather', item.icon);
                        const span = document.createElement('span');
                        span.textContent = item.name_icon;
                        button.append(icon, span);
                        divAksi.appendChild(button);
                    });
                    td.appendChild(divAksi);
                break;
                default:
                    const value = row[col.key];
                    td.textContent = value;
            };
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    });
    const tfoot = document.createElement('tfoot');
    tfoot.classList.add('font-medium', 'text-sm');
    footer.forEach(row => {
        const tr = document.createElement('tr');
        row.cols.forEach(col => {
            const td = document.createElement('td');
            td.classList.add('py-4', 'px-4', 'text-center', 'border-r-2', 'border-[var(--yellow)]');
            if (col.colspan) td.colSpan = col.colspan;
            if (col.text) {
                td.textContent = col.text;
            };
            if (col.checkbox) {
                const input = document.createElement('input');
                input.type = 'checkbox';
                const label = document.createElement('span');
                label.textContent = ' ' + col.label;
                label.classList.add('text-xs', 'font-normal');
                td.append(input, label);
            };
            if (col.button) {
                td.classList.add('bg-[var(--yellow)]');
                const btn = document.createElement('button');
                btn.type = 'button';
                btn.textContent = col.button;
                btn.classList.add('font-bold', 'text-base', 'cursor-pointer', 'px-5', 'py-1');
                td.appendChild(btn);
            };
            tr.appendChild(td);
            tfoot.appendChild(tr);
        });
    });
    table.append(thead, tbody, tfoot);
    div.appendChild(table);
    if(containerId) {
        document.getElementById(containerId).appendChild(div);
        feather.replace();
    };
    return div;
};
// END Section