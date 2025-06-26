import copy from 'copy-to-clipboard';
import { Icon } from 'kawhi-ui';
import React from 'react';
import './index-type.less';
const Index = () => {
  const handleCopy = (text: string) => {
    copy(text, {
      onCopy: () => {
        alert(`复制成功: ${text}`);
      },
    });
  };

  return (
    <div className="icon-type-content">
      <div onClick={() => handleCopy('icon-kawhi-cuowu')}>
        <Icon type="icon-kawhi-cuowu" style={{ fontSize: '40px' }} />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-wenhao-yuanquan')}>
        <Icon type="icon-kawhi-wenhao-yuanquan" style={{ fontSize: '40px' }} />
      </div>

      <div onClick={() => handleCopy('icon-kawhi-cuowu-yuanquan')}>
        <Icon type="icon-kawhi-cuowu-yuanquan" style={{ fontSize: '40px' }} />
      </div>

      <div onClick={() => handleCopy('icon-kawhi-daoru')}>
        <Icon type="icon-kawhi-daoru" style={{ fontSize: '40px' }} />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-baocun')}>
        <Icon type="icon-kawhi-baocun" style={{ fontSize: '40px' }} />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-chengyuan')}>
        <Icon type="icon-kawhi-chengyuan" style={{ fontSize: '40px' }} />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-jianqu')}>
        <Icon type="icon-kawhi-jianqu" style={{ fontSize: '40px' }} />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-wenjianjia-dakai')}>
        <Icon type="icon-kawhi-wenjianjia-dakai" style={{ fontSize: '40px' }} />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-biyan')}>
        <Icon type="icon-kawhi-biyan" style={{ fontSize: '40px' }} />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-chuangjianduihua')}>
        <Icon type="icon-kawhi-chuangjianduihua" style={{ fontSize: '40px' }} />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-daochu')}>
        <Icon type="icon-kawhi-daochu" style={{ fontSize: '40px' }} />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-chaojijisuan')}>
        <Icon type="icon-kawhi-chaojijisuan" style={{ fontSize: '40px' }} />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-wenhao')}>
        <Icon type="icon-kawhi-wenhao" style={{ fontSize: '40px' }} />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-gaojigongneng')}>
        <Icon type="icon-kawhi-gaojigongneng" style={{ fontSize: '40px' }} />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-chaosuanshili')}>
        <Icon type="icon-kawhi-chaosuanshili" style={{ fontSize: '40px' }} />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-gouwuche')}>
        <Icon type="icon-kawhi-gouwuche" style={{ fontSize: '40px' }} />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-fenbushi')}>
        <Icon type="icon-kawhi-fenbushi" style={{ fontSize: '40px' }} />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-jianshao-yuanquan')}>
        <Icon
          type="icon-kawhi-jianshao-yuanquan"
          style={{ fontSize: '40px' }}
        />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-fanghuxiaoguoyanzheng')}>
        <Icon
          type="icon-kawhi-fanghuxiaoguoyanzheng"
          style={{ fontSize: '40px' }}
        />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-dingzhiluojinshu')}>
        <Icon type="icon-kawhi-dingzhiluojinshu" style={{ fontSize: '40px' }} />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-wangluo')}>
        <Icon type="icon-kawhi-wangluo" style={{ fontSize: '40px' }} />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-fenxiang')}>
        <Icon type="icon-kawhi-fenxiang" style={{ fontSize: '40px' }} />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-fujian')}>
        <Icon type="icon-kawhi-fujian" style={{ fontSize: '40px' }} />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-jiandao')}>
        <Icon type="icon-kawhi-jiandao" style={{ fontSize: '40px' }} />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-guzhang')}>
        <Icon type="icon-kawhi-guzhang" style={{ fontSize: '40px' }} />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-qiehuan2')}>
        <Icon type="icon-kawhi-a-qiehuan2" style={{ fontSize: '40px' }} />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-fuwu')}>
        <Icon type="icon-kawhi-fuwu" style={{ fontSize: '40px' }} />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-fanghujilu')}>
        <Icon type="icon-kawhi-fanghujilu" style={{ fontSize: '40px' }} />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-fasong2')}>
        <Icon type="icon-kawhi-a-fasong2" style={{ fontSize: '40px' }} />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-quanping')}>
        <Icon type="icon-kawhi-quanping" style={{ fontSize: '40px' }} />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-wendang')}>
        <Icon type="icon-kawhi-wendang" style={{ fontSize: '40px' }} />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-a-renyuanzhanghaoguanli')}>
        <Icon
          type="icon-kawhi-a-renyuanzhanghaoguanli"
          style={{ fontSize: '40px' }}
        />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-moxingcangku')}>
        <Icon type="icon-kawhi-moxingcangku" style={{ fontSize: '40px' }} />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-fuzhi')}>
        <Icon type="icon-kawhi-fuzhi" style={{ fontSize: '40px' }} />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-kefu')}>
        <Icon type="icon-kawhi-kefu" style={{ fontSize: '40px' }} />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-rili')}>
        <Icon type="icon-kawhi-rili" style={{ fontSize: '40px' }} />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-qiehuanbiaoge')}>
        <Icon type="icon-kawhi-qiehuanbiaoge" style={{ fontSize: '40px' }} />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-shouye')}>
        <Icon type="icon-kawhi-shouye" style={{ fontSize: '40px' }} />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-jifeishuoming')}>
        <Icon type="icon-kawhi-jifeishuoming" style={{ fontSize: '40px' }} />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-renyuanguanli')}>
        <Icon type="icon-kawhi-renyuanguanli" style={{ fontSize: '40px' }} />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-moxingweitiao')}>
        <Icon type="icon-kawhi-moxingweitiao" style={{ fontSize: '40px' }} />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-saomiao')}>
        <Icon type="icon-kawhi-saomiao" style={{ fontSize: '40px' }} />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-shenglvehao')}>
        <Icon type="icon-kawhi-shenglvehao" style={{ fontSize: '40px' }} />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-feiyong')}>
        <Icon type="icon-kawhi-feiyong" style={{ fontSize: '40px' }} />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-tianjia-yuanquan')}>
        <Icon type="icon-kawhi-tianjia-yuanquan" style={{ fontSize: '40px' }} />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-paixu')}>
        <Icon type="icon-kawhi-paixu" style={{ fontSize: '40px' }} />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-paizhao')}>
        <Icon type="icon-kawhi-paizhao" style={{ fontSize: '40px' }} />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-shujuji')}>
        <Icon type="icon-kawhi-shujuji" style={{ fontSize: '40px' }} />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-loudou')}>
        <Icon type="icon-kawhi-loudou" style={{ fontSize: '40px' }} />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-kaifaji')}>
        <Icon type="icon-kawhi-kaifaji" style={{ fontSize: '40px' }} />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-shili')}>
        <Icon type="icon-kawhi-shili" style={{ fontSize: '40px' }} />
      </div>
    </div>
  );
};

export default Index;
